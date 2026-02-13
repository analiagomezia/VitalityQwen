'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { RocketLaunchIcon, CurrencyDollarIcon, BoltIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
    const t = useTranslations('Hero');

    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                            <BoltIcon className="h-5 w-5 text-indigo-400" />
                            <span className="text-indigo-300 text-sm font-medium tracking-wide">
                                {t('badge')}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                            {t('titlePart1')} <span className="gradient-text">{t('titlePart2')}</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="#contacto"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/20 flex items-center justify-center space-x-2"
                            >
                                <span>{t('cta')}</span>
                                <RocketLaunchIcon className="h-6 w-6" />
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center space-x-6 text-gray-500">
                            <div className="flex items-center space-x-2">
                                <CurrencyDollarIcon className="h-5 w-5" />
                                <span className="text-sm">Todo incluido</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BoltIcon className="h-5 w-5" />
                                <span className="text-sm">Velocidad Pro</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-0 transition duration-500"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9]">
                                <Image
                                    src="/images/hero-mockup.png"
                                    alt="Vitality Global Mockup"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-6 -right-6 lg:right-0 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl hidden md:block"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-500/10 rounded-lg">
                                    <BoltIcon className="h-6 w-6 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Entrega en</p>
                                    <p className="text-sm font-bold text-white">48 Horas</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
