'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const PortfolioSection = () => {
    const t = useTranslations('Portfolio');
    const [index, setIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: "FlowIA",
            key: "flowia",
            category: "avatares",
            image: "/images/portfolio/flowia.jpg",
            gradient: "from-purple-500 to-indigo-600",
        },
        {
            id: 2,
            title: "IAGOM",
            key: "iagom",
            category: "automations",
            image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
            gradient: "from-blue-500 to-cyan-600",
        },
        {
            id: 3,
            title: "Tech Warrior Agency",
            key: "techwarrior",
            category: "marketing",
            image: "/images/portfolio/techwarrior.png",
            gradient: "from-red-500 to-orange-600",
        },
        {
            id: 4,
            title: "Hotel Amsterdam",
            key: "amsterdam",
            category: "tourism",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
            gradient: "from-amber-500 to-yellow-600",
        },
        {
            id: 5,
            title: "OdontApp",
            key: "odontapp",
            category: "healthtech",
            image: "/images/portfolio/odontapp.jpg",
            gradient: "from-teal-500 to-emerald-600",
        },
        {
            id: 6,
            title: "CreativeForge",
            key: "creativeforge",
            category: "genai",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
            gradient: "from-rose-500 to-pink-600",
        }
    ];

    // Create a loopable array for seamless transition
    const displayProjects = [...projects, ...projects, ...projects];

    const next = () => {
        setIndex((prev) => (prev + 1) % projects.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };


    return (
        <section id="proyectos" className="py-24 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                        {t('badge')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </h3>
                </div>

                <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        className="flex py-10"
                        animate={{
                            x: `calc(-${index * (100 / displayProjects.length * 3)}%)`,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 24
                        }}
                        style={{
                            width: `${displayProjects.length * 40}%`, // 40% width per card
                            gap: "2rem"
                        }}
                    >
                        {displayProjects.map((project, i) => {
                            const originalIndex = i % projects.length;
                            const isHovered = hoveredIndex === i;

                            return (
                                <motion.div
                                    key={`${project.key}-${i}`}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    animate={{
                                        scale: isHovered ? 1.02 : 1,
                                    }}
                                    className="w-[400px] h-[450px] glass-card rounded-[2.5rem] overflow-hidden flex-shrink-0 relative group border border-white/10 shadow-2xl transition-all duration-500"
                                >
                                    {/* Dynamic Hover Border Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none`} />

                                    {/* Shiny Glint Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                                    <div className={`w-full h-1/2 relative overflow-hidden`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            sizes="400px"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent`} />

                                        <div className="absolute top-4 right-4">
                                            <div className={`px-4 py-1.5 rounded-full bg-gray-900/70 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 group-hover:border-indigo-500/50 transition-colors duration-500`}>
                                                {t(`categories.${project.category}`)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 h-1/2 flex flex-col justify-between bg-gray-900/40 backdrop-blur-xl relative z-10">
                                        <div>
                                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-medium group-hover:text-gray-300 transition-colors">
                                                {t(`projects.${project.key}.description`)}
                                            </p>
                                        </div>
                                        <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-4">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
                                            >
                                                <span>Demo</span>
                                                <ChevronRightIcon className="h-4 w-4" />
                                            </motion.button>
                                            <div className="flex items-center space-x-2">
                                                <span className={`h-1.5 w-1.5 rounded-full bg-indigo-500 ${index % projects.length === originalIndex ? 'animate-ping' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="flex justify-center space-x-4 mt-12">
                    <button
                        onClick={prev}
                        className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                    >
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                        onClick={next}
                        className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                    >
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
