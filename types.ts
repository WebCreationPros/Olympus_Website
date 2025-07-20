
import React from 'react';

export interface Service {
    title: string;
    description: string;
    Icon: React.FC<{ className?: string }>;
}

export interface Testimonial {
    quote: string;
    author: string;
    location: string;
}
