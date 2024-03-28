'use client';
import React, { useState, useEffect } from 'react';

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Footer from "@/components/main/Footer";
import Projects from "@/components/main/Projects";
import OurSpace from "@/components/main/OurSpace";

export default function Home() {
    const hasWindow = typeof window !== 'undefined';

    const [width, setWidth] = useState(() =>(hasWindow? window.innerWidth:50));

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <h1 className="Welcome-text text-[200px]">
        <p>Width of the screen is: {width}px</p>
     </h1>
       
    );
    // return (
    //     <main className="h-full w-full">
    //         <div className="flex flex-col gap-20">
    //             <Hero/>    
    //             <OurSpace/>
    //             <Encryption/>
    //             <Projects/>
    //             <Footer/>
    //         </div>
           
    //     </main>
    // );
}
