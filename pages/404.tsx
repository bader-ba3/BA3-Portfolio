"use client";
import React,{useContext,useState,useEffect} from "react";
import Spline from '@splinetool/react-spline';
import Head from 'next/head';
import "../app/globals.css";

import Navbar from "@/components/main/Navbar";
import MouseContextProvider from "../context/mouse-context";
import StarsCanvas from "@/components/main/StarBackground";
import HideOnTouchscreen from "@/components/HideOnTouchscreen";

const Page404 = () => {
    const hasWindow = typeof window !== 'undefined';

    const [size, setSize] = useState(hasWindow?window.innerWidth:300);
    useEffect(() => {
      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
    });
    });
      return (
        <html lang="en">
            <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            {/* <Script type="text/javascript" src="/static/script.js"></Script> */}
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            </Head>
        <body
            className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >  
       
       <React.StrictMode>
         <MouseContextProvider>
        <StarsCanvas/>
        <Navbar/> 
        <div className="w-full h-[100vh] flex items-center justify-center z-[99]">
        <Spline className=" z-[20]" scene="https://prod.spline.design/b6t8O2Ycvz6EalBc/scene.splinecode" style={{scale:size *0.0015}}/>
    </div>
   
        <HideOnTouchscreen />
       </MouseContextProvider>
        </React.StrictMode> 
        </body>
    
        </html>
        
    )
}

export default Page404