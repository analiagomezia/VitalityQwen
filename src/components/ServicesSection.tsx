'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    CheckCircleIcon,
    GlobeAltIcon,
    ServerIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    ClockIcon
} from '@heroicons/react/24/solid';

const ServicesSection = () => {
    const t = useTranslations('Services');

    const inclusions = [
        { key: "landing", icon: GlobeAltIcon },
        { key: "hosting", icon: ServerIcon },
        { key: "domain", icon: CheckCircleIcon },
        { key: "speed", icon: ClockIcon },
        { key: "responsive", icon: DevicePhoneMobileIcon },
        { key: "seo", icon: MagnifyingGlassIcon },
    ];

    return (
        <section id="servicios" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                        {t('badge')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="gradient-border p-px"
                    >
                        <div className="bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 h-full">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-6">{t('plan.title')}</h4>
                                    <div className="flex items-baseline mb-8">
                                        <span className="text-5xl font-extrabold text-white">{t('plan.price')}</span>
                                        <span className="text-xl text-gray-400 ml-2">USD</span>
                                    </div>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        {t('plan.description')}
                                    </p>
                                    <div className="flex justify-start">
                                        <motion.a
                                            href="https://www.paypal.com/ncp/payment/9GERMGPQKRLDQ"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-base shadow-lg shadow-indigo-600/20 transition-all font-bold"
                                        >
                                            {t('plan.cta')}
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {inclusions.map((inc, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-xl border border-white/5"
                                        >
                                            <div className="flex-shrink-0">
                                                <inc.icon className="h-6 w-6 text-indigo-400" />
                                            </div>
                                            <span className="text-white font-medium">{t(`features.${inc.key}`)}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm">
                            {t('disclaimer')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
