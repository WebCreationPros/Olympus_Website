import React, { useState, useEffect } from 'react';

// A simple, stylized tree silhouette for the background
const Tree: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={className} style={style}>
        <svg viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M55 180 V100 H45 V180 H55 Z" fill="#123814" />
            <path d="M50 0 C-10 80, 20 80, 50 120 C80 80, 110 80, 50 0 Z" fill="#1B5E20" />
            <path d="M50 20 C10 85, 30 90, 50 130 C70 90, 90 85, 50 20 Z" fill="#2E7D32" />
        </svg>
    </div>
);

// Distant mountain range (furthest back)
const DistantMountainSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="distantMountainGradient" x1="0.5" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#1B5E20" />
                <stop offset="100%" stopColor="#0D4F0F" />
            </linearGradient>
            <filter id="distantMountainShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="15" dy="15" stdDeviation="12" floodColor="black" floodOpacity="0.5"/>
            </filter>
        </defs>
        <path 
            d="M0,280 C120,200,240,260,360,240 C480,220,600,280,720,260 C840,240,960,300,1080,280 C1200,260,1320,300,1440,290 L1440,320 L0,320 Z" 
            fill="url(#distantMountainGradient)"
            style={{ filter: 'url(#distantMountainShadow)' }}
        />
    </svg>
);

// Middle mountain range
const MiddleMountainSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="middleMountainGradient" x1="0.5" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#2E7D32" />
                <stop offset="70%" stopColor="#1B5E20" />
                <stop offset="100%" stopColor="#0F5132" />
            </linearGradient>
            <filter id="middleMountainShadow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="12" dy="12" stdDeviation="10" floodColor="black" floodOpacity="0.45"/>
            </filter>
        </defs>
        <path 
            d="M0,250 C150,160,270,240,420,220 C570,200,690,270,840,250 C990,230,1110,290,1260,270 C1350,260,1440,280,1440,280 L1440,320 L0,320 Z" 
            fill="url(#middleMountainGradient)"
            style={{ filter: 'url(#middleMountainShadow)' }}
        />
    </svg>
);

// Background hill layer for 3D depth effect
const BackgroundHillSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="backgroundHillGradient" x1="0.5" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#388E3C" />
                <stop offset="60%" stopColor="#2E7D32" />
                <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
            <filter id="backgroundShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="8" dy="8" stdDeviation="8" floodColor="black" floodOpacity="0.4"/>
            </filter>
        </defs>
        <path 
            d="M0,220 C180,130,300,250,520,220 C740,190,860,310,1060,250 C1260,190,1440,280,1440,280 L1440,320 L0,320 Z" 
            fill="url(#backgroundHillGradient)"
            style={{ filter: 'url(#backgroundShadow)' }}
        />
    </svg>
);

// A wavy hill SVG to sit at the bottom of the hero section
const HillSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="hillGradient" x1="0.5" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#4CAF50" />
                <stop offset="60%" stopColor="#2E7D32" />
                <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="-5" stdDeviation="5" floodColor="black" floodOpacity="0.3"/>
            </filter>
        </defs>
        <path 
            d="M0,192 C200,100,320,224,540,192 C760,160,880,288,1080,224 C1280,160,1440,256,1440,256 L1440,320 L0,320 Z" 
            fill="url(#hillGradient)"
            style={{ filter: 'url(#shadow)' }}
        />
    </svg>
);

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-sky-400">
            {/* Parallax Background Layers */}
            {/* Layer 1: Sky Gradient */}
            <div 
                className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-400 to-emerald-300 z-0"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            />
            {/* Layer 2: Distant Mountain Range */}
            <div 
                className="absolute bottom-0 left-0 w-full h-[50vh] sm:h-[55vh] md:h-[60vh] z-11"
                style={{ transform: `translateY(${offsetY * 0.6}px)` }}
            >
                <DistantMountainSVG className="w-full h-full" />
            </div>

            {/* Layer 3: Middle Mountain Range */}
            <div 
                className="absolute bottom-0 left-0 w-full h-[45vh] sm:h-[50vh] md:h-[55vh] z-12"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
                <MiddleMountainSVG className="w-full h-full" />
            </div>

            {/* Layer 4: Trees positioned on hills */}
            <div 
                className="absolute inset-0 z-13"
                style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            >
                <Tree 
                    className="absolute w-20 sm:w-32 md:w-40 bottom-[15vh] sm:bottom-[18vh] md:bottom-[20vh]" 
                    style={{ left: '5%', filter: 'blur(1px)', opacity: 0.8 }} 
                />
                <Tree 
                    className="absolute w-20 sm:w-24 md:w-32 bottom-[8vh] sm:bottom-[10vh] md:bottom-[12vh]" 
                    style={{ left: '20%', filter: 'blur(1px)', opacity: 0.7 }} 
                />
                <Tree 
                    className="absolute w-20 sm:w-36 md:w-48 bottom-[10vh] sm:bottom-[12vh] md:bottom-[15vh]" 
                    style={{ right: '8%', opacity: 0.8 }} 
                />
                <Tree 
                    className="absolute w-16 sm:w-20 md:w-24 bottom-[8vh] sm:bottom-[10vh] md:bottom-[12vh]" 
                    style={{ right: '25%', filter: 'blur(1px)', opacity: 0.4 }} 
                />
            </div>

            {/* Dark overlay for better text visibility */}
            <div className="absolute z-20 inset-0 bg-black opacity-50"></div>

            {/* Zeus Character - positioned behind text */}
            <img 
                src="https://res.cloudinary.com/dkpp29hrv/image/upload/v1753052775/Lawn_Zeus_m9lkzg.png"
                alt="Olympus god mowing a lawn on a hill"
                className="absolute z-16 bottom-[+3vh] sm:bottom-[-2vh] md:bottom-[-2vh] left-1/2 w-[50vw] sm:w-[45vw] md:w-[40vw] max-w-[280px] sm:max-w-[350px] md:max-w-[450px]"
                style={{ 
                    transform: `translateX(-65%) translateY(${offsetY * 0.25}px)`,
                    filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.4))'
                }}
            />

            {/* Background Hill Layer for 3D Effect */}
            <div 
                className="absolute bottom-0 left-0 w-full h-[40vh] sm:h-[42vh] md:h-[45vh] z-14"
                style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
                <BackgroundHillSVG className="w-full h-full" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-20 text-center px-4 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32">
                <h1 
                    className="font-serif text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider uppercase relative"
                    style={{ 
                        color: '#ffffff',
                        textShadow: `
                            1px 1px 0px rgba(255,255,255,0.9),
                            2px 2px 0px rgba(200,255,200,0.8),
                            3px 3px 0px rgba(76,175,80,0.7),
                            4px 4px 0px rgba(46,125,50,0.6),
                            5px 5px 0px rgba(27,94,32,0.5),
                            6px 6px 12px rgba(0,0,0,0.8),
                            0px 0px 20px rgba(255,255,255,0.3)
                        `,
                        filter: `drop-shadow(0px 12px 24px rgba(0,0,0,0.5))`,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0fff0 15%, #e8f5e8 30%, #c8e6c8 45%, #81C784 60%, #4CAF50 75%, #2E7D32 90%, #ffffff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transform: 'translateZ(0)'
                    }}
                >
                    <style jsx>{`
                        .letter-glow {
                            display: inline-block;
                            position: relative;
                            opacity: 0;
                            transform: translateY(20px);
                            animation: letter-appear 0.8s ease-out forwards;
                        }
                        
                        .letter-glow:first-child {
                            animation: big-o-intro 1.2s ease-out forwards;
                        }
                        
                        .letter-glow:nth-child(2) { animation-delay: 1.3s; }
                        .letter-glow:nth-child(3) { animation-delay: 1.4s; }
                        .letter-glow:nth-child(4) { animation-delay: 1.5s; }
                        .letter-glow:nth-child(5) { animation-delay: 1.6s; }
                        .letter-glow:nth-child(6) { animation-delay: 1.7s; }
                        .letter-glow:nth-child(7) { animation-delay: 1.8s; }
                        .letter-glow:nth-child(8) { animation-delay: 1.9s; }
                        .letter-glow:nth-child(9) { animation-delay: 2.0s; }
                        .letter-glow:nth-child(10) { animation-delay: 2.1s; }
                        .letter-glow:nth-child(11) { animation-delay: 2.2s; }
                        .letter-glow:nth-child(12) { animation-delay: 2.3s; }
                        .letter-glow:nth-child(13) { animation-delay: 2.4s; }
                        .letter-glow:nth-child(14) { animation-delay: 2.5s; }
                        .letter-glow:nth-child(15) { animation-delay: 2.6s; }
                        .letter-glow:nth-child(16) { animation-delay: 2.7s; }
                        .letter-glow:nth-child(17) { animation-delay: 2.8s; }
                

                        @keyframes big-o-intro {
                            0% {
                                opacity: 0;
                                transform: translate(0, 0) scale(3);
                                filter: drop-shadow(0px 0px 30px rgba(255,255,255,1)) drop-shadow(0px 0px 40px rgba(76,175,80,0.8));
                            }
                            40% {
                                opacity: 1;
                                transform: translate(0, 0) scale(2);
                                filter: drop-shadow(0px 0px 20px rgba(255,255,255,0.8)) drop-shadow(0px 0px 30px rgba(76,175,80,0.6));
                            }
                            70% {
                                opacity: 1;
                                transform: translate(-10px, 0) scale(1.3);
                                filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.5));
                            }
                            100% {
                                opacity: 1;
                                transform: translate(0, 0) scale(1);
                                filter: none;
                            }
                        }
                        
                        @media (max-width: 640px) {
                            @keyframes big-o-intro {
                                0% {
                                    opacity: 0;
                                    transform: translate(0, 0) scale(2.5);
                                    filter: drop-shadow(0px 0px 20px rgba(255,255,255,1)) drop-shadow(0px 0px 30px rgba(76,175,80,0.8));
                                }
                                40% {
                                    opacity: 1;
                                    transform: translate(0, 0) scale(1.8);
                                    filter: drop-shadow(0px 0px 15px rgba(255,255,255,0.8)) drop-shadow(0px 0px 20px rgba(76,175,80,0.6));
                                }
                                70% {
                                    opacity: 1;
                                    transform: translate(-5px, 0) scale(1.2);
                                    filter: drop-shadow(0px 0px 8px rgba(255,255,255,0.5));
                                }
                                100% {
                                    opacity: 1;
                                    transform: translate(0, 0) scale(1);
                                    filter: none;
                                }
                            }
                        }

                        @keyframes letter-appear {
                            0% {
                                opacity: 0;
                                transform: translateY(20px) scale(0.8);
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0) scale(1);
                            }
                        }

                    `}</style>
                    {"OLYMPUS LAWNCARE".split('').map((letter, index) => (
                        <span key={index} className="letter-glow">
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </h1>
                
                <div className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl mx-auto w-full max-w-2xl px-2">
                   <p 
                        className="font-light tracking-wide opacity-0"
                        style={{ 
                            fontFamily: 'Georgia, "Times New Roman", serif',
                            fontStyle: 'italic',
                            textShadow: '0px 2px 8px rgba(0,0,0,0.7), 0px 0px 15px rgba(76,175,80,0.3)',
                            animation: 'subtitle-reveal 1.5s ease-out 3.2s forwards'
                        }}
                    >
                        Divine Care for Earthly Lawns
                    </p>
                </div>
                <style jsx>{`
                    @keyframes subtitle-reveal {
                        0% {
                            opacity: 0;
                            transform: translateY(30px) scale(0.9);
                            filter: blur(4px);
                        }
                        50% {
                            opacity: 0.7;
                            transform: translateY(15px) scale(0.95);
                            filter: blur(2px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                            filter: blur(0px);
                        }
                    }
                `}</style>

                <a 
                    href="#contact" 
                    className="mt-6 sm:mt-8 md:mt-10 inline-block bg-olympus-green-light text-white font-bold text-sm sm:text-base md:text-lg py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full
                               transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl
                               border-2 border-transparent hover:border-white animate-glow"
                >
                    Request a Free Quote
                </a>
            </div>

            {/* Foreground Hill Layer */}
            <div 
                className="absolute bottom-0 left-0 w-full h-[35vh] sm:h-[38vh] md:h-[40vh] z-40"
                style={{ transform: `translateY(${offsetY * 0.15}px)` }}
            >
                <HillSVG className="w-full h-full" />
            </div>

            {/* Scroll down arrow */}
             <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 z-50 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white opacity-90" style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;