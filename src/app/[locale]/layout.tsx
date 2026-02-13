import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vitality Global | Digital Agency",
    description: "Elite digital agency specializing in high-performance landing pages.",
};

export default async function RootLayout({
    children,
    params: paramsPromise
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await paramsPromise;
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30`}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
