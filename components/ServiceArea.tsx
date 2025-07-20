import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useParallax } from '../hooks/useParallax';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const serviceAreas = [
    'Saginaw',
    'Bay City',
    'Midland',
    'Bridgeport',
    'Zilwaukee',
    'And Surrounding Communities'
];

const ServiceArea: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { scrollY, mousePosition, getParallaxStyle } = useParallax();
    
    const floatingElementScale = 1 + Math.abs(mousePosition.y) * 0.005;

    return (
        <section id="service-area" className="relative py-20 md:py-32 bg-olympus-gray-dark overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-16 right-12 w-24 h-24 bg-olympus-green/8 rounded-full blur-2xl"
                    style={{
                        ...getParallaxStyle(-0.015, 0.003),
                        transform: `${getParallaxStyle(-0.015, 0.003).transform} scale(${floatingElementScale})`
                    }}
                />
                <div 
                    className="absolute bottom-20 left-8 w-20 h-20 bg-olympus-green-light/5 rounded-full blur-xl"
                    style={{
                        ...getParallaxStyle(0.02, -0.002),
                        transform: `${getParallaxStyle(0.02, -0.002).transform} scale(${1 + Math.abs(mousePosition.x) * 0.006})`
                    }}
                />
                <div 
                    className="absolute top-1/3 left-1/4 w-18 h-18 bg-white/4 rounded-full blur-lg"
                    style={{
                        ...getParallaxStyle(0.012, 0.003),
                        transform: `${getParallaxStyle(0.012, 0.003).transform} scale(${1 + Math.abs(mousePosition.y) * 0.004})`
                    }}
                />
                <div 
                    className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-olympus-green-dark/10 rounded-full blur-md"
                    style={{
                        ...getParallaxStyle(-0.008, -0.003),
                        transform: `${getParallaxStyle(-0.008, -0.003).transform} scale(${floatingElementScale})`
                    }}
                />
            </div>

            <div 
                ref={ref} 
                className={`container mx-auto px-4 text-center transition-all duration-1000 relative z-10 ${inView ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    ...getParallaxStyle(0.006, 0.001),
                    transform: `${getParallaxStyle(0.006, 0.001).transform} scale(${1 + Math.abs(mousePosition.x) * 0.002})`
                }}
            >
                <h2 
                    className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
                    style={{
                        ...getParallaxStyle(-0.003, 0.002),
                        transform: `${getParallaxStyle(-0.003, 0.002).transform} scale(${1 + Math.abs(mousePosition.y) * 0.003})`
                    }}
                >
                    Proudly Serving
                </h2>
                <p 
                    className="text-lg text-olympus-gray-light mb-12 max-w-2xl mx-auto"
                    style={{
                        ...getParallaxStyle(0.002, 0.001),
                        transform: `${getParallaxStyle(0.002, 0.001).transform} scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                    }}
                >
                    We bring our divine lawn care services to these fine communities in Michigan.
                </p>
                <div 
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                    style={{
                        ...getParallaxStyle(-0.001, 0.0005),
                        transform: `${getParallaxStyle(-0.001, 0.0005).transform} scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                    }}
                >
                    {serviceAreas.map((area, index) => (
                        <div 
                            key={area} 
                            className={`flex items-center bg-olympus-green-darkest p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-olympus-green-dark hover:shadow-olympus-green-dark/30 transform hover:-translate-y-1 ${inView ? 'animate-fadeInUp' : ''}`}
                            style={{ 
                                animationDelay: `${index * 150}ms`, 
                                animationFillMode: 'backwards',
                                transform: `
                                    translateY(${scrollY * (0.001 + index * 0.0002)}px) 
                                    translateX(${mousePosition.x * (0.2 + index * 0.05)}px) 
                                    scale(${1 + Math.abs(mousePosition.y) * (0.001 + index * 0.0002)})
                                    rotate(${Math.sin(scrollY * 0.0005 + index) * 0.05}deg)
                                `
                            }}
                        >
                            <LocationIcon 
                                className="w-6 h-6 text-olympus-green-light mr-3 transition-all duration-300" 
                                style={{
                                    transform: `rotate(${scrollY * 0.002 + index * 0.5}deg) scale(${1 + Math.abs(mousePosition.x) * 0.003})`
                                }}
                            />
                            <span 
                                className="text-white font-medium text-lg"
                                style={{
                                    transform: `translateX(${mousePosition.x * (0.1 + index * 0.02)}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                                }}
                            >
                                {area}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;