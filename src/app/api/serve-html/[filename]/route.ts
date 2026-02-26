import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ALLOWED_FILES = [
    'email-preview',
    'payment-success',
    'onboarding',
    'faq',
];

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ filename: string }> }
) {
    const { filename } = await params;

    if (!ALLOWED_FILES.includes(filename)) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', `${filename}.html`);

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}
