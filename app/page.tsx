'use client';

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any; }) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
      
      }
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");
    
    return (
        <main className="h-full w-full">
                 
            <div className="flex flex-col gap-20">
          
                <Hero/>      
                <Skills/>
                <Encryption/>
                <Projects/>
            
            </div>
            <motion.div className='cursor' style={{   zIndex: 100 }}variants={variants}animate={cursorVariant}/>
        </main>
    );
}
