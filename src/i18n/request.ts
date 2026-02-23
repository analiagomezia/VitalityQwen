import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '../navigation';

export default getRequestConfig(async ({ requestLocale }) => {
    // Await the locale because it's a promise in the new Next.js versions
    let locale = await requestLocale;
    console.log('DEBUG: i18n request config for locale:', locale);

    // Provide a default locale if it's undefined
    if (!locale) locale = 'es';

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        locale: locale as string,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
