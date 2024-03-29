'use client';
import React, { useState, useEffect } from 'react';

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Footer from "@/components/main/Footer";
import Projects from "@/components/main/Projects";
import OurSpace from "@/components/main/OurSpace";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero/>    
                {/* <OurSpace/>
                <Encryption/>
                <Projects/>
                <Footer/> */}
            </div>
           
        </main>
    );
}
