
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-olympus-green-darkest font-sans selection:bg-olympus-green-light selection:text-white">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <ServiceArea />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
