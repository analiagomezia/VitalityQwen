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
            color: "text-indigo-400",
            borderColor: "rgb(129, 140, 248)", // indigo-400
        },
        {
            key: 'simplicidad',
            icon: SparklesIcon,
            color: "text-purple-400",
            borderColor: "rgb(192, 132, 252)", // purple-400
        },
        {
            key: 'precio',
            icon: BanknotesIcon,
            color: "text-rose-400",
            borderColor: "rgb(251, 113, 133)", // rose-400
        }
    ];

    return (
        <section id="nosotros" className="py-16 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            viewport={{ once: true }}
                            variants={{
                                initial: { opacity: 0, y: 30 },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        opacity: { duration: 0.5, delay: index * 0.1 }
                                    }
                                },
                                hover: {}
                            }}
                            className={`glass-card p-2 md:p-8 rounded-2xl relative group overflow-hidden border-[8px] transition-all duration-500`}
                            style={{
                                borderColor: `${feature.borderColor.replace(')', ', 0.3)')}`,
                                boxShadow: `0 0 15px ${feature.borderColor.replace(')', ', 0.1)')}`
                            }}
                        >
                            {/* Inner Neon Glow */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                style={{ background: `radial-gradient(circle at center, ${feature.borderColor}, transparent)` }} />
                            <div className={`absolute top-0 right-0 w-32 h-32 ${feature.borderColor.includes('129') ? 'bg-indigo-500' : feature.borderColor.includes('192') ? 'bg-purple-500' : 'bg-rose-500'}/20 -mr-12 -mt-12 rounded-full blur-3xl`} />

                            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                                <motion.div
                                    variants={{
                                        hover: { scale: 1.1 }
                                    }}
                                    className={`w-10 h-10 md:w-14 md:h-14 bg-gray-900/80 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border-2 border-white/10 shadow-lg`}
                                >
                                    <feature.icon className={`h-5 w-5 md:h-8 md:w-8 ${feature.color}`} />
                                </motion.div>

                                <motion.h4
                                    variants={{
                                        hover: { scale: 1.05, originX: 0 }
                                    }}
                                    className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 tracking-tight leading-tight"
                                >
                                    {t(`features.${feature.key}.title`)}
                                </motion.h4>

                                <motion.p
                                    variants={{
                                        hover: { scale: 1.02, originX: 0 }
                                    }}
                                    className="text-xs md:text-gray-300 md:leading-relaxed font-medium md:text-base text-gray-400"
                                >
                                    {t(`features.${feature.key}.description`)}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
