import React, { useState } from 'react';
import { useParallax } from '../hooks/useParallax';

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');
    const { scrollY, mousePosition, getParallaxStyle } = useParallax();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Submitting...');
        // Mock form submission
        setTimeout(() => {
            setStatus('Thank you! Your quote request has been sent.');
            const form = e.target as HTMLFormElement;
            form.reset();
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    const floatingElementScale = 1 + Math.abs(mousePosition.x) * 0.004;

    return (
        <section id="contact" className="relative py-20 md:py-32 bg-olympus-gray-dark overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-24 left-16 w-22 h-22 bg-olympus-green-light/6 rounded-full blur-2xl"
                    style={{
                        ...getParallaxStyle(-0.018, 0.003),
                        transform: `${getParallaxStyle(-0.018, 0.003).transform} scale(${floatingElementScale})`
                    }}
                />
                <div 
                    className="absolute top-32 right-8 w-18 h-18 bg-olympus-green/9 rounded-full blur-xl"
                    style={{
                        ...getParallaxStyle(0.025, -0.003),
                        transform: `${getParallaxStyle(0.025, -0.003).transform} scale(${1 + Math.abs(mousePosition.y) * 0.005})`
                    }}
                />
                <div 
                    className="absolute bottom-24 left-1/3 w-20 h-20 bg-white/3 rounded-full blur-lg"
                    style={{
                        ...getParallaxStyle(0.013, 0.004),
                        transform: `${getParallaxStyle(0.013, 0.004).transform} scale(${1 + Math.abs(mousePosition.x) * 0.006})`
                    }}
                />
                <div 
                    className="absolute bottom-16 right-20 w-16 h-16 bg-olympus-green-dark/12 rounded-full blur-md"
                    style={{
                        ...getParallaxStyle(-0.009, -0.002),
                        transform: `${getParallaxStyle(-0.009, -0.002).transform} scale(${floatingElementScale})`
                    }}
                />
            </div>

            <div 
                className="container mx-auto px-4 relative z-10"
                style={{
                    ...getParallaxStyle(0.004, 0.002),
                    transform: `${getParallaxStyle(0.004, 0.002).transform} scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                }}
            >
                <div 
                    className="text-center mb-12"
                    style={{
                        ...getParallaxStyle(-0.002, 0.002),
                        transform: `${getParallaxStyle(-0.002, 0.002).transform} scale(${1 + Math.abs(mousePosition.x) * 0.002})`
                    }}
                >
                    <h2 
                        className="font-serif text-4xl md:text-5xl font-bold text-white"
                        style={{
                            transform: `translateY(${scrollY * -0.002}px) scale(${1 + Math.abs(mousePosition.y) * 0.003})`
                        }}
                    >
                        Request a Divine Quote
                    </h2>
                    <p 
                        className="text-lg text-olympus-gray-light mt-2"
                        style={{
                            transform: `translateX(${mousePosition.x * 0.3}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                        }}
                    >
                        Let's craft your perfect lawn. Reach out today!
                    </p>
                </div>
                
                <div 
                    className="grid md:grid-cols-2 gap-12"
                    style={{
                        ...getParallaxStyle(0.001, 0.001),
                        transform: `${getParallaxStyle(0.001, 0.001).transform} scale(${1 + Math.abs(mousePosition.y) * 0.0005})`
                    }}
                >
                    <form 
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                        style={{
                            transform: `translateY(${scrollY * 0.001}px) translateX(${mousePosition.x * 0.2}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                        }}
                    >
                        <div 
                            className="relative"
                            style={{
                                transform: `translateY(${Math.sin(scrollY * 0.001) * 0.2}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                            }}
                        >
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="peer w-full bg-olympus-green-darkest border-2 border-olympus-green-dark text-white rounded-md p-3 focus:border-olympus-green-light outline-none transition-all duration-300 transform focus:scale-105" 
                                placeholder=" " 
                                style={{
                                    transform: `scale(${1 + Math.abs(mousePosition.x) * 0.0005})`
                                }}
                            />
                            <label 
                                htmlFor="name" 
                                className="absolute left-3 -top-2.5 text-olympus-gray-light bg-olympus-green-darkest px-1 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-olympus-green-light"
                                style={{
                                    transform: `translateX(${mousePosition.x * 0.1}px)`
                                }}
                            >
                                Name
                            </label>
                        </div>
                        
                        <div 
                            className="relative"
                            style={{
                                transform: `translateY(${Math.sin(scrollY * 0.001 + 1) * 0.2}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                            }}
                        >
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="peer w-full bg-olympus-green-darkest border-2 border-olympus-green-dark text-white rounded-md p-3 focus:border-olympus-green-light outline-none transition-all duration-300 transform focus:scale-105" 
                                placeholder=" " 
                                style={{
                                    transform: `scale(${1 + Math.abs(mousePosition.x) * 0.0005})`
                                }}
                            />
                            <label 
                                htmlFor="email" 
                                className="absolute left-3 -top-2.5 text-olympus-gray-light bg-olympus-green-darkest px-1 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-olympus-green-light"
                                style={{
                                    transform: `translateX(${mousePosition.x * 0.1}px)`
                                }}
                            >
                                Email
                            </label>
                        </div>
                        
                        <div 
                            className="relative"
                            style={{
                                transform: `translateY(${Math.sin(scrollY * 0.001 + 2) * 0.2}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                            }}
                        >
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4} 
                                required 
                                className="peer w-full bg-olympus-green-darkest border-2 border-olympus-green-dark text-white rounded-md p-3 focus:border-olympus-green-light outline-none transition-all duration-300 transform focus:scale-105" 
                                placeholder=" "
                                style={{
                                    transform: `scale(${1 + Math.abs(mousePosition.x) * 0.0005})`
                                }}
                            ></textarea>
                            <label 
                                htmlFor="message" 
                                className="absolute left-3 -top-2.5 text-olympus-gray-light bg-olympus-green-darkest px-1 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-olympus-green-light"
                                style={{
                                    transform: `translateX(${mousePosition.x * 0.1}px)`
                                }}
                            >
                                Message (e.g., address, desired services)
                            </label>
                        </div>
                        
                        <div
                            style={{
                                transform: `translateY(${Math.sin(scrollY * 0.001 + 3) * 0.2}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                            }}
                        >
                            <button 
                                type="submit" 
                                className="w-full bg-olympus-green-light text-white font-bold py-3 px-6 rounded-md hover:bg-olympus-green transform hover:scale-105 transition-all duration-300 shadow-md"
                                style={{
                                    transform: `scale(${1 + Math.abs(mousePosition.x) * 0.001}) rotate(${Math.sin(scrollY * 0.0005) * 0.05}deg)`
                                }}
                            >
                                Send Request
                            </button>
                        </div>
                        
                        {status && (
                            <p 
                                className="text-center text-olympus-green-light transition-all duration-500"
                                style={{
                                    transform: `scale(${1 + Math.abs(mousePosition.y) * 0.002}) translateY(${Math.sin(scrollY * 0.002) * 0.1}px)`
                                }}
                            >
                                {status}
                            </p>
                        )}
                    </form>
                    
                    <div 
                        className="text-white flex flex-col justify-center space-y-8"
                        style={{
                            transform: `translateY(${scrollY * -0.001}px) translateX(${mousePosition.x * -0.2}px) scale(${1 + Math.abs(mousePosition.y) * 0.001})`
                        }}
                    >
                        <a 
                            href="mailto:care@olympuslawncaremi.com" 
                            className="flex items-center group transition-all duration-300"
                            style={{
                                transform: `translateY(${Math.sin(scrollY * 0.0008) * 0.3}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                            }}
                        >
                            <div 
                                className="p-4 bg-olympus-green-darkest rounded-full mr-4 group-hover:bg-olympus-green-light transition-all duration-300"
                                style={{
                                    transform: `rotate(${scrollY * 0.003}deg) scale(${1 + Math.abs(mousePosition.y) * 0.005})`
                                }}
                            >
                                <EmailIcon 
                                    className="w-8 h-8 text-olympus-green-light group-hover:text-white transition-colors duration-300" 
                                    style={{
                                        transform: `rotate(${Math.sin(scrollY * 0.001) * 0.5}deg)`
                                    }}
                                />
                            </div>
                            <div>
                                <h3 
                                    className="font-bold text-xl"
                                    style={{
                                        transform: `translateX(${mousePosition.x * 0.2}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                                    }}
                                >
                                    Email Us
                                </h3>
                                <p 
                                    className="text-olympus-gray-light group-hover:text-olympus-green-light transition-colors duration-300"
                                    style={{
                                        transform: `translateX(${mousePosition.x * 0.15}px) scale(${1 + Math.abs(mousePosition.y) * 0.0005})`
                                    }}
                                >
                                    care@olympuslawncaremi.com
                                </p>
                            </div>
                        </a>
                        
                        <a 
                            href="tel:989-233-1781" 
                            className="flex items-center group transition-all duration-300"
                            style={{
                                transform: `translateY(${Math.sin(scrollY * 0.0008 + 1) * 0.3}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                            }}
                        >
                            <div 
                                className="p-4 bg-olympus-green-darkest rounded-full mr-4 group-hover:bg-olympus-green-light transition-all duration-300"
                                style={{
                                    transform: `rotate(${scrollY * -0.003}deg) scale(${1 + Math.abs(mousePosition.y) * 0.005})`
                                }}
                            >
                                <PhoneIcon 
                                    className="w-8 h-8 text-olympus-green-light group-hover:text-white transition-colors duration-300" 
                                    style={{
                                        transform: `rotate(${Math.sin(scrollY * 0.001 + 1) * 0.5}deg)`
                                    }}
                                />
                            </div>
                            <div>
                                <h3 
                                    className="font-bold text-xl"
                                    style={{
                                        transform: `translateX(${mousePosition.x * 0.2}px) scale(${1 + Math.abs(mousePosition.x) * 0.001})`
                                    }}
                                >
                                    Call Us
                                </h3>
                                <p 
                                    className="text-olympus-gray-light group-hover:text-olympus-green-light transition-colors duration-300"
                                    style={{
                                        transform: `translateX(${mousePosition.x * 0.15}px) scale(${1 + Math.abs(mousePosition.y) * 0.0005})`
                                    }}
                                >
                                    (989) 233-1781
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;