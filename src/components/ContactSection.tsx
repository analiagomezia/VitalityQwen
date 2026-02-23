'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    CreditCardIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ContactSection = () => {
    const t = useTranslations('Contact');

    return (
        <section id="contacto" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                        {t('badge')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </h3>
                    <p className="text-xl text-gray-400 mb-16 leading-relaxed">
                        {t('description')}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
                        <motion.a
                            href="https://wa.me/5492615450857?text=%C2%A1Hola%20Vitality%20Global!%20Estoy%20interesada/o%20en%20tener%20una%20landing%20page%20para%20mi%20negocio%20%C2%BFPodriamos%20contactar%20una%20entrevista?"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gray-800/50 backdrop-blur-xl p-6 md:p-12 rounded-[2rem] border-2 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all group flex flex-col items-center justify-center text-center h-full relative overflow-hidden"
                        >
                            {/* Inner Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -ml-16 -mb-16" />

                            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 mx-auto mb-4 md:mb-8 group-hover:border-indigo-500 transition-colors">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-10 w-10 fill-indigo-400 group-hover:fill-indigo-300 transition-colors"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.54 4.197 1.566 6.041L0 24l6.102-1.6c1.789.976 3.794 1.492 5.89 1.493h.005c6.634 0 12.05-5.414 12.053-12.051 0-3.216-1.252-6.242-3.525-8.514z" />
                                    </svg>
                                </div>
                                <div className="flex-grow flex flex-col justify-center relative z-10">
                                    <p className="text-gray-500 text-[13px] md:text-sm mb-2 uppercase tracking-widest">{t('whatsappLabel')}</p>
                                    <p className="text-white font-bold text-lg md:text-xl uppercase tracking-tight">{t('whatsappCta')}</p>
                                </div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://www.paypal.com/ncp/payment/9GERMGPQKRLDQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gray-800/50 backdrop-blur-xl p-6 md:p-12 rounded-[2rem] border-2 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all group flex flex-col items-center justify-center text-center h-full relative overflow-hidden"
                        >
                            {/* Inner Background Glow */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mt-16" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -mr-16 -mb-16" />

                            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 mx-auto mb-4 md:mb-8 group-hover:border-purple-500 transition-colors">
                                    <CreditCardIcon className="h-10 w-10 text-purple-400" />
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <p className="text-gray-500 text-[13px] md:text-sm mb-2 uppercase tracking-widest">{t('cardLabel')}</p>
                                    <p className="text-white font-bold text-lg md:text-xl uppercase tracking-tight">{t('hireService')}</p>
                                </div>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
