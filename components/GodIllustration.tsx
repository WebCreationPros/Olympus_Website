
import React from 'react';

const GodIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Illustration of a greek god mowing a lawn">
        <defs>
            <linearGradient id="godGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4CAF50', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2E7D32', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <path 
            fill="url(#godGradient)"
            fillOpacity="0.3"
            stroke="#4CAF50"
            strokeWidth="1.5"
            d="M136.5 45.9c-2-1.8-4.6-2.9-7.3-2.9-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2c2.7 0 5.3-1 7.3-2.9l12.4 12.4c-4.4 5.3-11.1 8.7-18.7 8.7-14.7 0-26.6-11.9-26.6-26.6s11.9-26.6 26.6-26.6c7.6 0 14.3 3.3 18.7 8.7L136.5 45.9z M93 84.5l-20-20-13 13 20 20-30 30-10-10-13 13 10 10-3 3 13 13 3-3 10 10 13-13-10-10 30-30z M115 107l-8 8-42-42 8-8 42 42z M150 90l-40-40 10-10 40 40-10 10z M60 150h80v15H60z M70 165v15h10v-15H70z m40 0v15h10v-15h-10z M165.7 65.4c-4.9-4.9-12.8-4.9-17.7 0l-7.1 7.1c-1.3-2-3-3.7-5-5l7.1-7.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-7.1 7.1c1.3 2 3 3.7 5 5l7.1-7.1c4.9-4.9 4.9-12.8 0-17.7z M120 70 a50 50 0 1 0 -50 50"
        />
        <path 
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.2"
            strokeWidth="2"
            d="M50 130 q 50 -20 100 0"
        />
         <path 
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.1"
            d="M20 180 C 40 160, 60 170, 80 165 S 120 150, 140 160, 180 180, 180 180"
            strokeWidth="3"
        />
    </svg>
);

export default GodIllustration;
