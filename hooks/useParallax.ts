import { useState, useEffect } from 'react';

export const useParallax = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ 
                x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
                y: (e.clientY - window.innerHeight / 2) / window.innerHeight
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return {
        scrollY,
        mousePosition,
        getParallaxStyle: (speed: number = 0.5, mouseSpeed: number = 0.02) => ({
            transform: `translateY(${scrollY * speed}px) translateX(${mousePosition.x * mouseSpeed * 100}px)`
        }),
        getRotationStyle: (speed: number = 0.1) => ({
            transform: `rotate(${scrollY * speed}deg)`
        })
    };
};

export default useParallax;