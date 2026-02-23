import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center py-12 gap-10 mb-12 border-b border-gray-800">
                    <div className="text-center">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="Vitality Global"
                                width={400}
                                height={150}
                                className="h-16 md:h-14 w-auto mx-auto"
                            />
                        </Link>
                        <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            {
                                name: 'Instagram',
                                href: 'https://www.instagram.com/vitalityglobal_/',
                                icon: (
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                )
                            },
                            {
                                name: 'Facebook',
                                href: '#',
                                icon: (
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                )
                            },
                            {
                                name: 'TikTok',
                                href: '#',
                                icon: (
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                    </svg>
                                )
                            }
                        ].map(social => (
                            <a key={social.name} href={social.href} className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all transform hover:scale-110">
                                <span className="sr-only">{social.name}</span>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-gray-500 text-sm px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center mb-6">
                        <span className="flex items-center">
                            © {new Date().getFullYear()} {t('madeWith')}
                            <svg className="w-4 h-4 text-red-500 animate-pulse mx-1.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.645 20.91l-.007-.003c-.125-.063-2.396-1.215-4.477-2.607-2.071-1.385-4.413-3.141-5.756-5.417-1.344-2.277-1.408-4.706-.543-6.195C1.848 4.71 4.225 3.5 6.46 3.5c1.472 0 2.84.588 3.84 1.547 1-.96 2.367-1.547 3.84-1.547 2.235 0 4.612 1.21 5.599 2.94.865 1.489.8 3.919-.543 6.195-1.343 2.276-3.685 4.032-5.756 5.417-2.081 1.392-4.352 2.544-4.477 2.607l-.01.004-.011.005z" />
                            </svg>
                            {t('by')} <span className="text-gray-300 font-semibold ml-1">Vitality Global</span>.
                        </span>
                        <span className="hidden md:inline text-gray-800">|</span>
                        <span>{t('rights')}</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
