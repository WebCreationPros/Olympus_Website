
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { Service } from '../types';
import { MowerIcon, TreeIcon, WeedIcon, AerationIcon, FertilizerIcon, SeedIcon, CleanupIcon, PruneIcon } from './icons/ServiceIcons';

const services: Service[] = [
    { title: 'Mow, Edge, and Clean', description: 'Precision mowing, sharp edging, and thorough cleanup for a pristine look.', Icon: MowerIcon },
    { title: 'Tree Removal', description: 'Safe and efficient removal of unwanted or hazardous trees.', Icon: TreeIcon },
    { title: 'Tree Prune and Trim', description: 'Expert pruning to improve tree health, structure, and appearance.', Icon: PruneIcon },
    { title: 'Weed Control', description: 'Targeted treatments to eliminate weeds and prevent their return.', Icon: WeedIcon },
    { title: 'Aeration', description: 'Core aeration to reduce soil compaction and improve nutrient uptake.', Icon: AerationIcon },
    { title: 'Fertilizer Application', description: 'Custom fertilizer plans to nourish your lawn and promote lush growth.', Icon: FertilizerIcon },
    { title: 'Seed and Topping', description: 'Overseeding and top dressing to create a thicker, healthier turf.', Icon: SeedIcon },
    { title: 'Seasonal Cleanup', description: 'Comprehensive cleanups in spring and fall to keep your property immaculate.', Icon: CleanupIcon },
];

const ServiceCard: React.FC<{ service: Service, index: number, mousePosition: { x: number, y: number } }> = ({ service, index, mousePosition }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [cardRef, setCardRef] = useState<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const animationDelay = `${index * 100}ms`;

    // Calculate subtle parallax offset based on mouse position
    const parallaxOffset = cardRef ? {
        x: (mousePosition.x - window.innerWidth / 2) * 0.005,
        y: (mousePosition.y - window.innerHeight / 2) * 0.005
    } : { x: 0, y: 0 };

    return (
        <div
            ref={(el) => {
                ref(el);
                setCardRef(el);
            }}
            className={`relative bg-olympus-green-darkest rounded-lg p-6 text-center transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-olympus-green-light/30 group overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
                transitionDelay: inView ? animationDelay : '0ms',
                transform: isHovered ? `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y - 16}px, 0) scale(1.05)` : `translate3d(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px, 0)`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Floating background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-olympus-green-light/10 via-transparent to-olympus-green-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-olympus-green-light via-olympus-green to-olympus-green-light animate-pulse" style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-olympus-green-darkest rounded-lg" />
                </div>
            </div>
            
            <div className="relative z-10">
                <div className="mb-4 inline-block p-4 bg-olympus-green-dark rounded-full group-hover:bg-olympus-green-light transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <service.Icon className="w-10 h-10 text-olympus-green-light group-hover:text-white transition-all duration-500 group-hover:drop-shadow-lg" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-olympus-green-light transition-colors duration-300">{service.title}</h3>
                <p className="text-olympus-gray-light group-hover:text-white transition-colors duration-300">{service.description}</p>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Subtle parallax calculations
    const backgroundParallax = scrollY * 0.05;
    const floatingElementsParallax = scrollY * 0.02;

    return (
        <section 
            id="services" 
            className="relative py-20 md:py-32 bg-olympus-green-darkest/90 overflow-hidden"
            style={{ 
                backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-grass.png)',
                transform: `translateY(${backgroundParallax}px)`
            }}
        >
            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating gradient orbs */}
                <div 
                    className="absolute w-32 h-32 bg-gradient-to-r from-olympus-green-light/10 to-olympus-green/15 rounded-full blur-xl"
                    style={{
                        top: '5%',
                        left: '5%',
                        transform: `translate3d(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005 + floatingElementsParallax}px, 0)`
                    }}
                />
                <div 
                    className="absolute w-24 h-24 bg-gradient-to-l from-olympus-green-dark/15 to-olympus-green-light/10 rounded-full blur-lg"
                    style={{
                        top: '70%',
                        right: '5%',
                        transform: `translate3d(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.005 + floatingElementsParallax * 1.2}px, 0)`
                    }}
                />
                <div 
                    className="absolute w-20 h-20 bg-gradient-to-br from-olympus-green/20 to-transparent rounded-full blur-md"
                    style={{
                        bottom: '10%',
                        left: '80%',
                        transform: `translate3d(${mousePosition.x * 0.003}px, ${mousePosition.y * 0.006 + floatingElementsParallax * 0.8}px, 0)`
                    }}
                />
            </div>

            {/* Animated background pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-olympus-green-darkest/50 to-olympus-green-dark/30" />
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div 
                    className="text-center mb-12"
                    style={{
                        transform: `translateY(${scrollY * -0.02}px)`
                    }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Our Divine Services</h2>
                    <p className="text-lg text-olympus-gray-light mt-2 drop-shadow-md">Crafted to perfect your earthly domain.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} mousePosition={mousePosition} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
