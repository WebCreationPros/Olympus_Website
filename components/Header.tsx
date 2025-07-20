
import React, { useState, useEffect } from 'react';
import OlympusLogo from './OlympusLogo';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-olympus-green-darkest/90 shadow-lg backdrop-blur-sm py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#home" className="flex items-center space-x-2">
                    <OlympusLogo className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`} />
                </a>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-white font-medium hover:text-olympus-green-light transition-colors duration-300 relative group">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-olympus-green-light transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <a href="#contact" className="hidden md:inline-block bg-olympus-green-light text-white font-bold py-2 px-6 rounded-full hover:bg-olympus-green transform hover:scale-105 transition-all duration-300 shadow-md">
                    Free Quote
                </a>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <nav className="flex flex-col items-center space-y-4 py-4 bg-olympus-green-darkest/95">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white text-lg font-medium hover:text-olympus-green-light transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                     <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-olympus-green-light text-white font-bold py-2 px-6 rounded-full hover:bg-olympus-green transform hover:scale-105 transition-all duration-300 shadow-md mt-2">
                        Free Quote
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
