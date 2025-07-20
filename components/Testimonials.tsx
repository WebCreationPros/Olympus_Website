import React, { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../types';
import { useParallax } from '../hooks/useParallax';

const testimonials: Testimonial[] = [
    {
        quote: "Olympus Lawncare transformed our yard! It's never looked this green and healthy. Truly divine work from Jacob and his team.",
        author: 'Alex Johnson',
        location: 'Saginaw, MI'
    },
    {
        quote: "The professionalism and attention to detail are unmatched. Our lawn is the envy of the neighborhood. Highly recommend!",
        author: 'Samantha Bee',
        location: 'Bay City, MI'
    },
    {
        quote: "From the seasonal cleanup to regular mowing, every service has been exceptional. Reliable, friendly, and worth every penny.",
        author: 'Michael Chen',
        location: 'Midland, MI'
    }
];

const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);


const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { scrollY, mousePosition, getParallaxStyle } = useParallax();

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, [nextTestimonial]);

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    const floatingElementScale = 1 + Math.abs(mousePosition.x) * 0.005;

    return (
        <section id="testimonials" className="relative py-20 md:py-32 bg-olympus-green-darkest overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-20 left-10 w-20 h-20 bg-olympus-green-dark/8 rounded-full blur-xl"
                    style={{
                        ...getParallaxStyle(-0.02, 0.003),
                        transform: `${getParallaxStyle(-0.02, 0.003).transform} scale(${floatingElementScale})`
                    }}
                />
                <div 
                    className="absolute top-40 right-20 w-24 h-24 bg-olympus-green-light/5 rounded-full blur-2xl"
                    style={{
                        ...getParallaxStyle(0.03, -0.002),
                        transform: `${getParallaxStyle(0.03, -0.002).transform} scale(${1 + Math.abs(mousePosition.y) * 0.005})`
                    }}
                />
                <div 
                    className="absolute bottom-32 left-1/3 w-16 h-16 bg-olympus-green/8 rounded-full blur-lg"
                    style={{
                        ...getParallaxStyle(0.015, 0.004),
                        transform: `${getParallaxStyle(0.015, 0.004).transform} scale(${1 + Math.abs(mousePosition.x) * 0.006})`
                    }}
                />
                <div 
                    className="absolute top-1/3 right-10 w-14 h-14 bg-white/3 rounded-full blur-md"
                    style={{
                        ...getParallaxStyle(-0.01, -0.003),
                        transform: `${getParallaxStyle(-0.01, -0.003).transform} scale(${floatingElementScale})`
                    }}
                />
            </div>

            <div 
                className="container mx-auto px-4 text-center relative z-10"
                style={{
                    ...getParallaxStyle(0.008, 0.001),
                    transform: `${getParallaxStyle(0.008, 0.001).transform} scale(${1 + Math.abs(mousePosition.y) * 0.003})`
                }}
            >
                <h2 
                    className="font-serif text-4xl md:text-5xl font-bold text-white mb-12"
                    style={{
                        ...getParallaxStyle(-0.005, 0.002),
                        transform: `${getParallaxStyle(-0.005, 0.002).transform} scale(${1 + Math.abs(mousePosition.x) * 0.004})`
                    }}
                >
                    Word from the Mortals
                </h2>
                
                <div 
                    className="relative max-w-3xl mx-auto h-64"
                    style={{
                        ...getParallaxStyle(0.002, 0.001),
                        transform: `${getParallaxStyle(0.002, 0.001).transform} scale(${1 + Math.abs(mousePosition.y) * 0.002})`
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                transform: index === currentIndex 
                                    ? `translateY(${scrollY * 0.002}px) translateX(${mousePosition.x * 0.5}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                                    : 'none'
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <QuoteIcon 
                                    className="w-12 h-12 text-olympus-green-dark mb-4 transition-all duration-300"
                                    style={{
                                        transform: `rotate(${scrollY * 0.005}deg) scale(${1 + Math.abs(mousePosition.x) * 0.005})`
                                    }}
                                />
                                <p 
                                    className="text-xl italic text-olympus-gray-light mb-4"
                                    style={{
                                        transform: `translateY(${scrollY * 0.001}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                                    }}
                                >
                                    "{testimonial.quote}"
                                </p>
                                <p 
                                    className="font-bold text-white text-lg"
                                    style={{
                                        transform: `translateX(${mousePosition.x * 0.3}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                                    }}
                                >
                                    {testimonial.author}
                                </p>
                                <p 
                                    className="text-olympus-green-light"
                                    style={{
                                        transform: `translateX(${mousePosition.x * -0.2}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                                    }}
                                >
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div 
                    className="flex justify-center space-x-3 mt-8"
                    style={{
                        ...getParallaxStyle(-0.002, 0.0005),
                        transform: `${getParallaxStyle(-0.002, 0.0005).transform} scale(${1 + Math.abs(mousePosition.x) * 0.002})`
                    }}
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${index === currentIndex ? 'bg-olympus-green-light' : 'bg-olympus-green-dark'}`}
                            style={{
                                transform: `scale(${1 + Math.abs(mousePosition.y) * 0.005}) translateY(${Math.sin(scrollY * 0.001 + index) * 0.5}px)`
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;