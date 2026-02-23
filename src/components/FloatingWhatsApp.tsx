'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const FloatingWhatsApp = () => {
    const t = useTranslations('WhatsApp');
    const whatsappMessage = encodeURIComponent(t('message'));
    const whatsappUrl = `https://wa.me/5492615450857?text=${whatsappMessage}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-green-500 text-white p-3 md:p-3.5 rounded-full shadow-2xl shadow-green-500/30 border-2 border-white/20 flex items-center justify-center group transition-colors hover:bg-green-600"
            aria-label="Contact on WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 md:h-9 md:w-9 fill-current"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.54 4.197 1.566 6.041L0 24l6.102-1.6c1.789.976 3.794 1.492 5.89 1.493h.005c6.634 0 12.05-5.414 12.053-12.051 0-3.216-1.252-6.242-3.525-8.514z" />
            </svg>

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
                {t('tooltip')}
            </span>

            {/* Ping animation effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 -z-10" />
        </motion.a>
    );
};

export default FloatingWhatsApp;
