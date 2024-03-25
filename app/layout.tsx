
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import MouseContextProvider from "../context/mouse-context";
import React from 'react';
import Head from 'next/head';
import Script from 'next/script'



const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "BA3",
    description: "BA3 Portfolio",
    
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
   
    return (
        <html lang="en">
            <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            {/* <Script type="text/javascript" src="/static/script.js"></Script> */}
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            </head>
        <body
            className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >  
       
        <React.StrictMode>
        <MouseContextProvider>
        <StarsCanvas/>
        <Navbar/>
        {children}
        <Footer/>
        </MouseContextProvider>
        </React.StrictMode>
        </body>
    
        </html>
    );
}
