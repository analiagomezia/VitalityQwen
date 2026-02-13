'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ContactSection = () => {
    const t = useTranslations('Contact');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert(t('form.success'));
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contacto" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                            {t('badge')}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                        </h3>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-6 group">
                                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-indigo-500 transition-colors">
                                    <EnvelopeIcon className="h-7 w-7 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">{t('emailLabel')}</p>
                                    <p className="text-white font-bold text-lg">hola@vitalityglobal.tech</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 group">
                                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-purple-500 transition-colors">
                                    <PhoneIcon className="h-7 w-7 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">{t('phoneLabel')}</p>
                                    <p className="text-white font-bold text-lg">+1 (234) 567-890</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 group">
                                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-rose-500 transition-colors">
                                    <ChatBubbleLeftRightIcon className="h-7 w-7 text-rose-400" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">{t('whatsappLabel')}</p>
                                    <p className="text-white font-bold text-lg">{t('whatsappCta')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">{t('form.nameLabel')}</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder={t('form.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">{t('form.emailLabel')}</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder={t('form.emailPlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">{t('form.messageLabel')}</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                    placeholder={t('form.messagePlaceholder')}
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-white text-gray-900 font-black py-5 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-xl"
                            >
                                {t('form.submit')}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
