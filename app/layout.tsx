import  Home from "../app/page";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import page404 from "../pages/404";
import Navbar from "@/components/main/Navbar";
import MouseContextProvider from "../context/mouse-context";
import EncryptionContextProvider from "../context/encryptContext";
import LanguageContextProvider,{LanguageContext} from "../context/languageContext";
import React,{useState,useContext} from 'react';
import Head from 'next/head';
import Script from 'next/script'
import HideOnTouchscreen from "@/components/HideOnTouchscreen";
import Spline from '@splinetool/react-spline';
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';



const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "BA3",
    description: "BA3 Portfolio",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {


// const someElement = document.getElementById('root')!;    
// if(someElement) {
//     createRoot(someElement!).render( 
//     <React.StrictMode>
       
//         <LanguageContextProvider>
//         <EncryptionContextProvider>
//         <MouseContextProvider>
//        <StarsCanvas/>
//        <Navbar/> 
//        <Home/>
//        {/* {children} */}
//        <HideOnTouchscreen />
//       </MouseContextProvider>
//       </EncryptionContextProvider>
//       </LanguageContextProvider>
//        </React.StrictMode> 
//       )
// }
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
         {/* <div id="root"></div> */}
     
       <React.StrictMode>
       <EncryptionContextProvider>
        <LanguageContextProvider>
        <MouseContextProvider>
        <StarsCanvas/>
        <Navbar/> 
        {children}
        <HideOnTouchscreen />
       </MouseContextProvider>
       </LanguageContextProvider>
       </EncryptionContextProvider>
      
        </React.StrictMode> 
        
        </body>
    
        </html> 
        
    );
    
    
}
