'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    GlobeAltIcon,
    ServerIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
    const t = useTranslations('Services');

    const inclusions = [
        { key: "landing", icon: GlobeAltIcon },
        { key: "speed", icon: ClockIcon },
        { key: "responsive", icon: DevicePhoneMobileIcon },
        { key: "seo", icon: MagnifyingGlassIcon },
        { key: "whatsapp", icon: ChatBubbleLeftRightIcon },
        { key: "contact_form", icon: EnvelopeIcon },
    ];

    return (
        <section id="servicios" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                        {t('badge')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </h3>
                </div>

                <div className="max-w-3xl mx-auto px-2 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group p-[2px] rounded-[2rem] overflow-hidden"
                    >
                        {/* Static Gradient Border (Logo Palette) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500" />

                        <div className="relative bg-[#111827] rounded-[2rem] px-2 py-8 md:p-10 overflow-hidden">
                            {/* Inner Background Glow (Logo Palette) */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-[80px] -ml-32 -mt-32" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-500/15 rounded-full blur-[80px] -mr-32 -mb-32" />

                            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center relative z-10">
                                {/* Left Side: Features (Swapped) */}
                                <div className="order-2 lg:order-1 space-y-3">
                                    {inclusions.map((inc, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-3 bg-[#1f2937]/50 backdrop-blur-md p-1.5 md:p-3.5 rounded-xl border border-white/5 group/item hover:border-indigo-500/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 group-hover/item:bg-indigo-500/20 transition-colors">
                                                <inc.icon className="h-4 w-4" />
                                            </div>
                                            <span className="text-white font-bold text-sm md:text-base tracking-tight">
                                                {t(`features.${inc.key}`)}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right Side: Plan Info (Swapped) */}
                                <div className="order-1 lg:order-2 flex flex-col items-center text-center">
                                    <h4 className="text-3xl font-extrabold text-white pt-4 mb-2 md:mb-4 uppercase tracking-wider whitespace-nowrap">
                                        {t('plan.title')}
                                    </h4>

                                    <div className="flex items-baseline justify-center gap-2 mb-4 md:mb-6">
                                        <span className="text-2xl md:text-5xl font-medium text-white">
                                            {t('plan.price')}
                                        </span>
                                        <span className="text-sm md:text-lg text-gray-400 font-bold tracking-widest uppercase">
                                            USD
                                        </span>
                                    </div>

                                    <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed max-w-xs text-center md:text-justify">
                                        {t('plan.description')}
                                    </p>

                                    <motion.a
                                        href="https://www.paypal.com/ncp/payment/9GERMGPQKRLDQ"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white font-black px-4 py-2 md:px-8 md:py-4 rounded-xl text-base shadow-2xl shadow-indigo-600/40 transition-all uppercase tracking-tight mb-4"
                                    >
                                        {t('plan.cta')}
                                    </motion.a>

                                    <p className="text-gray-500 text-[10px] md:text-xs font-medium italic max-w-[200px]">
                                        {t('disclaimer')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
