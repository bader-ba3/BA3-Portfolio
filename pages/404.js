"use client";
import React,{useContext,useState,useEffect} from "react";
import Spline from '@splinetool/react-spline';
import Head from 'next/head';


const Page404 = () => {

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
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-0 z-[20] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
            <Spline   scene="https://prod.spline.design/b6t8O2Ycvz6EalBc/scene.splinecode"   />
            </div>
        </div>
        <HideOnTouchscreen />
       </MouseContextProvider>
        </React.StrictMode> 
        </body>
    
        </html>
        
    )
}

export default Page404