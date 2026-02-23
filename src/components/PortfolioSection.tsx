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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            id: 1,
            title: "FlowIA",
            key: "flowia",
            category: "avatares",
            image: "/images/portfolio/flowia.jpg",
            gradient: "from-purple-500 to-indigo-600",
            demoUrl: "https://flowia-studio.netlify.app/",
        },
        {
            id: 2,
            title: "IAGOM",
            key: "iagom",
            category: "automations",
            image: "/images/portfolio/iagom.jpg",
            gradient: "from-blue-500 to-cyan-600",
            demoUrl: "https://www.iagom.com",
        },
        {
            id: 3,
            title: "Tech Warrior Agency",
            key: "techwarrior",
            category: "marketing",
            image: "/images/portfolio/techwarrior.png",
            gradient: "from-red-500 to-orange-600",
            demoUrl: "https://techwarrioragency.netlify.app/",
        },
        {
            id: 5,
            title: "OdontApp",
            key: "odontapp",
            category: "healthtech",
            image: "/images/portfolio/odontapp.jpg",
            gradient: "from-teal-500 to-emerald-600",
            ctaKey: "requestDemo",
        },
        {
            id: 7,
            title: "ENTREVISTAI",
            key: "entrevistai",
            category: "saasia",
            image: "/images/portfolio/entrevistai.svg",
            gradient: "from-lime-500 to-green-600",
            demoUrl: "https://entrevistai.iagom.com",
        },
        {
            id: 8,
            title: "Carla Medina Coach",
            key: "carlamedinacouch",
            category: "couching",
            image: "/images/portfolio/carla-medina.jpg",
            gradient: "from-fuchsia-500 to-violet-600",
            demoUrl: "https://carlamedina.netlify.app/",
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

    const cardWidth = isMobile ? 280 : 400;
    const gap = 32; // 2rem

    return (
        <section id="proyectos" className="py-16 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                        {t('badge')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </h3>
                </div>

                <div className="relative cursor-grab active:cursor-grabbing">
                    {/* Side Navigation Arrows */}
                    <div className="absolute inset-y-0 -left-4 md:-left-8 z-30 hidden md:flex items-center pointer-events-none">
                        <button
                            onClick={prev}
                            className="p-3 md:p-4 rounded-full bg-gray-900/80 backdrop-blur-xl border border-white/10 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all pointer-events-auto shadow-2xl"
                        >
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="absolute inset-y-0 -right-4 md:-right-8 z-30 hidden md:flex items-center pointer-events-none">
                        <button
                            onClick={next}
                            className="p-3 md:p-4 rounded-full bg-gray-900/80 backdrop-blur-xl border border-white/10 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all pointer-events-auto shadow-2xl"
                        >
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden px-4 md:px-0">
                        <motion.div
                            className="flex py-10"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_, info) => {
                                const threshold = 50;
                                if (info.offset.x < -threshold) {
                                    next();
                                } else if (info.offset.x > threshold) {
                                    prev();
                                }
                            }}
                            animate={{
                                x: -(index + projects.length) * (cardWidth + gap),
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 24
                            }}
                            style={{
                                width: 'max-content',
                                gap: `${gap}px`
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
                                        className="w-[280px] md:w-[400px] h-[500px] md:h-[450px] glass-card rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex-shrink-0 relative group border border-white/10 shadow-2xl transition-all duration-500"
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
                                                sizes="(max-width: 768px) 280px, 400px"
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
                                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300 text-center">{project.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-medium group-hover:text-gray-300 transition-colors">
                                                    {t(`projects.${project.key}.description`)}
                                                </p>
                                            </div>
                                            <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-4">
                                                {project.demoUrl ? (
                                                    <motion.a
                                                        href={project.demoUrl}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 md:py-3 rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
                                                    >
                                                        <span>{t(`${(project as any).ctaKey || 'viewSite'}`)}</span>
                                                        <ChevronRightIcon className="h-4 w-4" />
                                                    </motion.a>
                                                ) : (
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 md:py-3 rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
                                                    >
                                                        <span>{t(`${(project as any).ctaKey || 'viewSite'}`)}</span>
                                                        <ChevronRightIcon className="h-4 w-4" />
                                                    </motion.button>
                                                )}
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
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center space-x-3 mt-6 md:mt-12">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2.5 transition-all duration-500 rounded-full ${index % projects.length === i
                                ? 'w-10 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]'
                                : 'w-2.5 bg-gray-700 hover:bg-gray-600'
                                }`}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
