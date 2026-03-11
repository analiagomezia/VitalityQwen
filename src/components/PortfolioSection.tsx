'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SPEED = 60; // px per second
const RESUME_DELAY = 1400;

const PortfolioSection = () => {
    const t = useTranslations('Portfolio');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const isPaused = useRef(false);
    const resumeTimeoutRef = useRef<number | null>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (resumeTimeoutRef.current) {
                window.clearTimeout(resumeTimeoutRef.current);
            }
        };
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
            demoUrl: "https://wa.me/5492615450857?text=hola%21%20quisiera%20solicitar%20DEMO%20de%20OdontoAPP",
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

    const cardWidth = isMobile ? 280 : 400;
    const gap = 32;
    const loopWidthRef = useRef(0);
    loopWidthRef.current = projects.length * (cardWidth + gap);

    const clearResumeTimeout = () => {
        if (resumeTimeoutRef.current) {
            window.clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = null;
        }
    };

    const pauseAutoScroll = () => {
        clearResumeTimeout();
        isPaused.current = true;
    };

    const resumeAutoScroll = (delay = 0) => {
        clearResumeTimeout();
        if (delay === 0) {
            isPaused.current = false;
            return;
        }
        resumeTimeoutRef.current = window.setTimeout(() => {
            isPaused.current = false;
            resumeTimeoutRef.current = null;
        }, delay);
    };

    const normalizeX = (value: number) => {
        const loopWidth = loopWidthRef.current;
        if (!loopWidth) return value;

        let next = value;
        while (next <= -2 * loopWidth) next += loopWidth;
        while (next > 0) next -= loopWidth;
        return next;
    };

    const moveByOneCard = (direction: 'prev' | 'next') => {
        const step = cardWidth + gap;
        const delta = direction === 'prev' ? step : -step;
        pauseAutoScroll();
        animate(x, normalizeX(x.get() + delta), {
            type: 'spring',
            stiffness: 220,
            damping: 28,
        });
        resumeAutoScroll(RESUME_DELAY);
    };

    useEffect(() => {
        x.set(-loopWidthRef.current);
    }, [x, cardWidth]);

    useAnimationFrame((_, delta) => {
        if (isPaused.current) return;
        const next = x.get() - (delta / 1000) * SPEED;
        x.set(normalizeX(next));
    });

    const displayProjects = [...projects, ...projects, ...projects];

    return (
        <section id="proyectos" className="py-16 bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3">
                        {t('badge')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
                        {t('titlePrefix')} <span className="gradient-text">{t('titleSuffix')}</span>
                    </h3>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-y-0 left-3 z-30 hidden md:flex items-center">
                    <button
                        onClick={() => moveByOneCard('prev')}
                        className="p-3 rounded-full bg-gray-900/80 backdrop-blur-xl border border-white/10 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-2xl"
                        aria-label="Proyecto anterior"
                    >
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="absolute inset-y-0 right-3 z-30 hidden md:flex items-center">
                    <button
                        onClick={() => moveByOneCard('next')}
                        className="p-3 rounded-full bg-gray-900/80 backdrop-blur-xl border border-white/10 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-2xl"
                        aria-label="Siguiente proyecto"
                    >
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>

                <motion.div
                    className="flex py-10 cursor-grab active:cursor-grabbing"
                    drag={isMobile ? 'x' : false}
                    dragMomentum={false}
                    onDragStart={pauseAutoScroll}
                    onDragEnd={() => {
                        x.set(normalizeX(x.get()));
                        resumeAutoScroll(RESUME_DELAY);
                    }}
                    onMouseEnter={pauseAutoScroll}
                    onMouseLeave={() => resumeAutoScroll()}
                    onTouchStart={pauseAutoScroll}
                    onTouchEnd={() => resumeAutoScroll(RESUME_DELAY)}
                    style={{ x, width: 'max-content', gap: `${gap}px`, paddingLeft: `${gap}px` }}
                >
                    {displayProjects.map((project, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <motion.div
                                key={`${project.key}-${i}`}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                animate={{ scale: isHovered ? 1.02 : 1 }}
                                className="w-[280px] md:w-[400px] h-[500px] md:h-[450px] glass-card rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex-shrink-0 relative group border border-white/10 shadow-2xl transition-all duration-500"
                            >
                                {/* Dynamic Hover Border Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none`} />

                                {/* Shiny Glint Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                                <div className="w-full h-1/2 relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 768px) 280px, 400px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent" />

                                    <div className="absolute top-4 right-4">
                                        <div className="px-4 py-1.5 rounded-full bg-gray-900/70 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 group-hover:border-indigo-500/50 transition-colors duration-500">
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
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-center">
                                        <motion.a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 md:py-3 rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
                                        >
                                            <span>{t(`${(project as any).ctaKey || 'viewSite'}`)}</span>
                                            <ChevronRightIcon className="h-4 w-4" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
