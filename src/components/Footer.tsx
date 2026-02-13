import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-8 mb-12 border-b border-gray-800">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-3xl font-bold gradient-text mb-4 inline-block">
                            Vitality Global
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            {t('description')}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        {[
                            {
                                name: 'X',
                                href: '#',
                                icon: (
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                )
                            },
                            // ... (Other icons hidden for brevity or kept same)
                            {
                                name: 'LinkedIn',
                                href: '#',
                                icon: (
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                )
                            },
                            {
                                name: 'Instagram',
                                href: '#',
                                icon: (
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

                <div className="flex flex-col items-center justify-center text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                        © {new Date().getFullYear()} {t('madeWith')}
                        <svg className="w-4 h-4 text-red-500 animate-pulse inline mx-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.645 20.91l-.007-.003c-.125-.063-2.396-1.215-4.477-2.607-2.071-1.385-4.413-3.141-5.756-5.417-1.344-2.277-1.408-4.706-.543-6.195C1.848 4.71 4.225 3.5 6.46 3.5c1.472 0 2.84.588 3.84 1.547 1-.96 2.367-1.547 3.84-1.547 2.235 0 4.612 1.21 5.599 2.94.865 1.489.8 3.919-.543 6.195-1.343 2.276-3.685 4.032-5.756 5.417-2.081 1.392-4.352 2.544-4.477 2.607l-.01.004-.011.005z" />
                        </svg>
                        {t('by')} <span className="text-gray-300 font-semibold mx-1">Vitality Global</span>. {t('rights')}
                    </div>

                    <div className="flex space-x-6 mt-4">
                        <Link href="#inicio" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">{t('links.legal')}</Link>
                        <Link href="#inicio" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">{t('links.privacy')}</Link>
                        <Link href="#inicio" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">{t('links.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
