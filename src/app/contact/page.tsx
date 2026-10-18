import Navbar from '@/components/Navbar';
import Contact from '@/sections/Contact';
import React from 'react';

interface Props { }

const page: React.FC<Props> = () => {
    return (
        <>
            <Navbar />
            <Contact />
        </>
    );
};

export default page;
