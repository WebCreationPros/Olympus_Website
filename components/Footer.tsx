
import React from 'react';
import OlympusLogo from './OlympusLogo';

const GrassBlade: React.FC<{ className: string, style?: React.CSSProperties }> = ({ className, style }) => (
    <div className={`absolute bottom-0 w-2 h-8 bg-olympus-green-dark origin-bottom ${className}`} style={style}></div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-olympus-green-darkest text-olympus-gray-light pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8">
                 {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="absolute bottom-0 h-6 w-1 bg-olympus-green origin-bottom animate-sway" style={{ left: `${i * 2}%`, animationDelay: `${Math.random() * 3}s`, transform: `scaleY(${0.5 + Math.random() * 0.5})` }}></div>
                ))}
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <OlympusLogo className="h-16 mx-auto md:mx-0 mb-4" />
                        <p className="max-w-xs mx-auto md:mx-0">Divine Care for Earthly Lawns.</p>
                        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Olympus Lawncare. All Rights Reserved.</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-xl text-white font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#home" className="hover:text-olympus-green-light transition-colors">Home</a></li>
                            <li className="mb-2"><a href="#about" className="hover:text-olympus-green-light transition-colors">About</a></li>
                            <li className="mb-2"><a href="#services" className="hover:text-olympus-green-light transition-colors">Services</a></li>
                            <li className="mb-2"><a href="#contact" className="hover:text-olympus-green-light transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="font-serif text-xl text-white font-bold mb-4">Contact Info</h3>
                         <p>Jacob Fish, Owner</p>
                         <p><a href="mailto:care@olympuslawncaremi.com" className="hover:text-olympus-green-light transition-colors">care@olympuslawncaremi.com</a></p>
                         <p><a href="tel:989-233-1781" className="hover:text-olympus-green-light transition-colors">(989) 233-1781</a></p>
                         <p className="mt-2">Saginaw, MI</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
