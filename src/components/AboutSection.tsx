'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    BoltIcon,
    SparklesIcon,
    BanknotesIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
    const t = useTranslations('About');

    const features = [
        {
            key: 'velocidad',
            icon: BoltIcon,
            color: "bg-indigo-500",
        },
        {
            key: 'simplicidad',
            icon: SparklesIcon,
            color: "bg-purple-500",
        },
        {
            key: 'precio',
            icon: BanknotesIcon,
            color: "bg-rose-500",
        }
    ];

    return (
        <section id="nosotros" className="py-24 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3"
                    >
                        {t('badge')}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: 5 }}
                            className="glass-card p-8 rounded-2xl relative group overflow-hidden border-2 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.5),0_0_40px_rgba(99,102,241,0.3)] hover:border-white/10 hover:shadow-none transition-all duration-500 shadow-xl"
                        >
                            {/* Inner Neon Glow */}
                            <div className="absolute inset-0 bg-indigo-500/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                            <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color}/30 -mr-12 -mt-12 rounded-full blur-3xl group-hover:opacity-0 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 ${feature.color}/40 rounded-xl flex items-center justify-center mb-6 border-2 border-indigo-300 group-hover:border-white/5 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.4)]`}>
                                    <feature.icon className={`h-8 w-8 text-white`} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-400 transition-colors duration-300">{t(`features.${feature.key}.title`)}</h4>
                                <p className="text-gray-200 leading-relaxed group-hover:text-gray-500 transition-colors">
                                    {t(`features.${feature.key}.description`)}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 left-0 h-2 ${feature.color} w-full group-hover:w-0 transition-all duration-700 shadow-[0_0_25px_rgba(99,102,241,1)]`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
