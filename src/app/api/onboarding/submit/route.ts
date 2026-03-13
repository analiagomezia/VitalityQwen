import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

type TurnstileVerifyResponse = {
  success: boolean;
  'error-codes'?: string[];
};

type RateLimitState = {
  windowStart: number;
  count: number;
};

const REQUIRED_FIELDS = [
  'biz-name',
  'contact-name',
  'contact-email',
  'contact-phone',
  'objective',
  'cta',
  'value-prop',
  'differentiator',
  'tone',
  'style',
] as const;

const MAX_REQUEST_BYTES = 8 * 1024 * 1024;
const MAX_LOGO_BYTES = 5 * 1024 * 1024;
const MAX_FIELD_LENGTH = 4000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const DEFAULT_N8N_WEBHOOK_URL = 'https://n8n.iagom.online/webhook/onboarding';

const ALLOWED_LOGO_MIME_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/svg+xml',
  'application/pdf',
]);

const ALLOWED_LOGO_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.pdf']);

const IGNORED_KEYS = new Set([
  'turnstileToken',
  'cf-turnstile-response',
  'submittedAt',
  'source',
  'social[]',
]);

const rateLimitStore = new Map<string, RateLimitState>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (!forwardedFor) {
    return 'unknown';
  }

  const [firstIp] = forwardedFor.split(',');
  return firstIp?.trim() || 'unknown';
}

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();

  for (const [ip, state] of rateLimitStore.entries()) {
    if (now - state.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(ip);
    }
  }

  const state = rateLimitStore.get(clientIp);
  if (!state) {
    rateLimitStore.set(clientIp, { windowStart: now, count: 1 });
    return false;
  }

  if (now - state.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(clientIp, { windowStart: now, count: 1 });
    return false;
  }

  state.count += 1;
  return state.count > RATE_LIMIT_MAX_REQUESTS;
}

function sanitizeText(value: string): string {
  return value.replace(/\u0000/g, '').trim().slice(0, MAX_FIELD_LENGTH);
}

function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
}

function getFileExtension(fileName: string): string {
  const index = fileName.lastIndexOf('.');
  if (index < 0) {
    return '';
  }

  return fileName.slice(index).toLowerCase();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeSubmittedAt(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf())) {
    return new Date().toISOString();
  }

  return parsed.toISOString();
}

async function verifyTurnstile(token: string, clientIp: string): Promise<boolean> {
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    console.error('[onboarding/submit] TURNSTILE_SECRET_KEY is not configured');
    return false;
  }

  const body = new URLSearchParams({
    secret: turnstileSecret,
    response: token,
  });

  if (clientIp !== 'unknown') {
    body.set('remoteip', clientIp);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    console.error('[onboarding/submit] Turnstile verification HTTP error', {
      status: response.status,
    });
    return false;
  }

  const result = (await response.json()) as TurnstileVerifyResponse;
  if (!result.success) {
    console.warn('[onboarding/submit] Turnstile rejected request', {
      errorCodes: result['error-codes'] ?? [],
    });
    return false;
  }

  return true;
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Intente nuevamente en un minuto.' },
      { status: 429 },
    );
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json(
      { error: 'Formato inválido. Se esperaba multipart/form-data.' },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { error: 'El formulario excede el tamaño máximo permitido.' },
      { status: 413 },
    );
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL ?? DEFAULT_N8N_WEBHOOK_URL;

  try {
    const formData = await request.formData();

    const turnstileTokenEntry =
      formData.get('turnstileToken') ?? formData.get('cf-turnstile-response');
    const turnstileToken =
      typeof turnstileTokenEntry === 'string' ? sanitizeText(turnstileTokenEntry) : '';

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Complete la verificación de seguridad.' },
        { status: 400 },
      );
    }

    const turnstileOk = await verifyTurnstile(turnstileToken, clientIp);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: 'La verificación de seguridad falló. Intente nuevamente.' },
        { status: 403 },
      );
    }

    const fields: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value !== 'string' || IGNORED_KEYS.has(key)) {
        continue;
      }
      fields[key] = sanitizeText(value);
    }

    const socials = formData
      .getAll('social[]')
      .map((entry) => (typeof entry === 'string' ? sanitizeText(entry) : ''))
      .filter(Boolean)
      .slice(0, 8);

    for (const field of REQUIRED_FIELDS) {
      if (!fields[field]) {
        return NextResponse.json(
          { error: `Falta completar el campo requerido: ${field}.` },
          { status: 400 },
        );
      }
    }

    if (!isValidEmail(fields['contact-email'])) {
      return NextResponse.json(
        { error: 'Ingrese un correo de contacto válido.' },
        { status: 400 },
      );
    }

    const confirmValue = (fields.confirm ?? '').toLowerCase();
    const isConfirmed = ['on', 'true', '1', 'si', 'yes'].includes(confirmValue);
    if (!isConfirmed) {
      return NextResponse.json(
        { error: 'Debe aceptar la confirmación para enviar el formulario.' },
        { status: 400 },
      );
    }

    const logoEntry = formData.get('logo');
    let logoFile: File | null = null;

    if (logoEntry instanceof File && logoEntry.size > 0) {
      if (logoEntry.size > MAX_LOGO_BYTES) {
        return NextResponse.json(
          { error: 'El logo excede el tamaño máximo de 5MB.' },
          { status: 400 },
        );
      }

      const extension = getFileExtension(logoEntry.name);
      const mimeType = logoEntry.type.toLowerCase();
      const mimeAllowed = mimeType ? ALLOWED_LOGO_MIME_TYPES.has(mimeType) : false;
      const extensionAllowed = ALLOWED_LOGO_EXTENSIONS.has(extension);

      if (!mimeAllowed && !extensionAllowed) {
        return NextResponse.json(
          { error: 'Formato de logo no permitido. Use PNG, JPG, SVG o PDF.' },
          { status: 400 },
        );
      }

      logoFile = logoEntry;
    }

    const source = sanitizeText((formData.get('source') as string) ?? 'onboarding-html');
    const submittedAtRaw = sanitizeText((formData.get('submittedAt') as string) ?? '');
    const submittedAt = normalizeSubmittedAt(submittedAtRaw || new Date().toISOString());

    const submissionId = randomUUID();
    const submissionPayload = {
      submissionId,
      source: source || 'onboarding-html',
      submittedAt,
      receivedAt: new Date().toISOString(),
      fields,
      socials,
      logo: logoFile
        ? {
            name: sanitizeFileName(logoFile.name),
            size: logoFile.size,
            type: logoFile.type || 'application/octet-stream',
          }
        : null,
      metadata: {
        ipAddress: clientIp,
        userAgent: request.headers.get('user-agent') ?? '',
        referer: request.headers.get('referer') ?? '',
      },
    };

    const serializedPayload = JSON.stringify(submissionPayload);

    const webhookBody = new FormData();
    webhookBody.set('submission', serializedPayload);
    if (logoFile) {
      webhookBody.set('logo', logoFile, sanitizeFileName(logoFile.name));
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'X-Vitality-Event': 'onboarding.submitted',
        'X-Vitality-Submission-Id': submissionId,
      },
      body: webhookBody,
    });

    if (!webhookResponse.ok) {
      const errorPreview = (await webhookResponse.text()).slice(0, 300);
      console.error('[onboarding/submit] n8n webhook request failed', {
        submissionId,
        status: webhookResponse.status,
        response: errorPreview,
      });

      return NextResponse.json(
        {
          error: 'No se pudo enviar la información al sistema de gestión. Intente nuevamente.',
          submissionId,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      submissionId,
    });
  } catch (error) {
    console.error('[onboarding/submit] Unexpected server error', {
      message: error instanceof Error ? error.message : 'unknown',
    });

    return NextResponse.json(
      { error: 'Error interno del servidor al procesar el onboarding.' },
      { status: 500 },
    );
  }
}