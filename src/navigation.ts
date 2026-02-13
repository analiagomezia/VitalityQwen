import { createNavigation } from 'next-intl/navigation';

export const locales = ['es', 'en'] as const;
export const localePrefix = 'always'; // Default: 'always'

export const { Link, redirect, usePathname, useRouter } =
    createNavigation({ locales, localePrefix });
