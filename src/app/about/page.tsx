import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import FooterSection from '@/sections/FooterSection';
import React from 'react';

export default function Page() {
    return (
        <>
            <Navbar />
            <About />
            <FooterSection />
        </>
    );
}