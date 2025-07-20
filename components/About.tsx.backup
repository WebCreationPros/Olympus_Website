
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" ref={ref} className="py-20 md:py-32 bg-olympus-gray-dark text-white">
            <div className={`container mx-auto px-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-olympus-green-light mb-4">
                            Forged in Michigan
                        </h2>
                        <p className="text-lg text-olympus-gray-light mb-4">
                            My name is Jacob Fish, owner of Olympus Lawncare. We are a locally-owned business dedicated to providing divine care for earthly lawns across Saginaw, Bay City, Midland, and our surrounding communities.
                        </p>
                        <p className="text-lg text-olympus-gray-light mb-6">
                            Our mission is to bring a touch of the mythical to your backyard, transforming it into a pristine, healthy, and vibrant landscape. With professional equipment and a commitment to excellence, we treat every lawn as if it were our own Mount Olympus.
                        </p>
                        <a href="#services" className="bg-transparent border-2 border-olympus-green-light text-olympus-green-light font-bold py-3 px-8 rounded-full hover:bg-olympus-green-light hover:text-white transition-all duration-300">
                            See Our Services
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <img 
                            src="https://picsum.photos/seed/lawn/500/500" 
                            alt="A beautifully manicured lawn" 
                            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-8 border-olympus-green-dark shadow-2xl" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
