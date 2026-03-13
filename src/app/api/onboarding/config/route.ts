import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? process.env.TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return NextResponse.json(
      { error: 'Turnstile no configurado' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    );
  }

  return NextResponse.json(
    { siteKey },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}