'use client';

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import HideOnTouchscreen from "@/components/HideOnTouchscreen";
import Image from "next/image";
import { Component, useEffect, useState,useContext } from 'react';
import { motion } from 'framer-motion';
import { MouseContext } from "@/context/mouse-context";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero/>    
                <Skills/>
                <Encryption/>
                <Projects/>
            </div>
            <HideOnTouchscreen />
           
        </main>
    );
}
