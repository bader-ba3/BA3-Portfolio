"use client";
import { useContext, useState } from "react";

import React,{useEffect} from "react";
import {motion} from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Spline from '@splinetool/react-spline';
import {SparklesIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import { MouseContext } from "@/context/mouse-context";
import { EncryptionContext } from "@/context/encryptContext";
import  encyptionText  from "../../utils/encyptionText";
import { LanguageContext } from "@/context/languageContext";

const HeroContent = () => {
    var isLcked = false
    const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const { languageType,LanguageChangeHandler } = useContext(LanguageContext);
    // const isTouchscreen = useState(IsTouchscreen);  
    function onMouseDown(e: { target: { name: string; }; }) {
        isLcked=!isLcked
        console.log("onMouseDown")
        encryptionChangeHandler(isLcked)
      }

      const hasWindow = typeof window !== 'undefined';
      
      const [height, setheight] = useState(hasWindow?window.innerHeight:9);

      const [width, setwidth] = useState(hasWindow?window.innerWidth:9);
      useEffect(() => {
          const handleResize = () => {
            setwidth(window.innerWidth);
            setheight(window.innerHeight);
          };
  
          window.addEventListener('resize', handleResize);
  
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);

    return (
       width>1300
       ?
        <motion.div
        style={{direction:languageType=="ar"?"rtl":"ltr"}}
            initial="hidden"
            animate="visible"
            // className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] mt-36">
            className="h-full w-full flex flex-col   px-20  items-center justify-center  mt-20 w-full z-[40] xl:flex-row">
                   {/* <motion.div variants={slideInFromRight(0.8)}className=" w-[20%] h-[5px]  z-[20] flex items-center justify-center "></motion.div> */}
            
         
            <motion.div
            className="h-full w-[50%] flex flex-col py-20  justify-center gap-5 m-auto text-start  z-[20]">
  
              <motion.div
                
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px]  border border-[#7042f88b] opacity-[0.9]"
                >
                    
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 ml-2 "/>
                    <h1 className="Welcome-text text-[13px] ml-2 ">
                  {encyptionText("Easiest way to Build Applications")}
                    </h1>
                </motion.div>
                
                
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl justify-center font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span 
                    className=""
                    >
                        {encyptionText("Providing")}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                        {encyptionText("the best")} {" "}
                        </span>
                        
                      
                        {encyptionText("in security, development and innovation.")}
                    </span>

                </motion.div>


                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    {encyptionText("addad")}
                </motion.p>

                <motion.a
                  onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                  onMouseLeave={() => cursorChangeHandler("cursor")}
                  className="py-2 button-primary text-center text-white rounded-lg max-w-[200px]"
                href="https://wa.me/+971562064458"
                target="_blank"
                    variants={slideInFromLeft(1)}
                    >
                   {encyptionText("Diving in our Space!")}
                </motion.a>
     
            

  
      
            </motion.div>
            
            <motion.div className=" w-[5%] h-[5px]  z-[20] flex items-center justify-center "></motion.div>
            <motion.div className=" w-[5%] h-[5px]  z-[20] flex items-center justify-center "></motion.div>

            <motion.a
                variants={slideInFromRight(0.8)}
                onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                onMouseLeave={() => cursorChangeHandler("cursor")}
                className=" w-[50%] h-[500px]  z-[99] px-20  flex items-center justify-center ">
                {/* <Spline scene="https://prod.spline.design/oKGmfKZpMBGwEBd9/scene.splinecode" style={{scale :"1.4"}}  */}
                <Spline scene="https://prod.spline.design/1wZ9HaYRCqaHjsQ2/scene.splinecode" style={{scale :"1.25"}} 
                 onMouseDown={onMouseDown}
                />
            </motion.a>
            {/* <motion.div variants={slideInFromRight(0.8)}className=" w-[20%] h-[5px]  z-[20] flex items-center justify-center "></motion.div> */}
        </motion.div>
        
        
        
        :





        <motion.div
        style={{direction:languageType=="ar"?"rtl":"ltr"}}
        initial="hidden"
        animate="visible"
        // className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] mt-36">
        className="h-full w-full flex flex-col   px-10  items-center justify-center  mt-20 w-full z-[20] ">
               {/* <motion.div variants={slideInFromRight(0.8)}className=" w-[20%] h-[5px]  z-[20] flex items-center justify-center "></motion.div> */}
             
        {/* <motion.div variants={slideInFromRight(0.8)}className=" w-[5%] h-[5px]  z-[20] flex items-center justify-center "></motion.div> */}
      <motion.a
            variants={slideInFromRight(0.8)}
            className=" w-[500px] h-[500px]  z-[40]  "style={{scale :1 , overflow:"auto"}} >
            {/* <Spline scene="https://prod.spline.design/oKGmfKZpMBGwEBd9/scene.splinecode" style={{scale :"1.4"}}  */}
            <Spline scene="https://prod.spline.design/1wZ9HaYRCqaHjsQ2/scene.splinecode" 
             onMouseDown={onMouseDown}
            />
        </motion.a>
        <div
       
        className="h-full w-[100%] flex flex-col py-0 px-0 justify-center gap-5    z-[20]">

            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px]  border border-[#7042f88b] opacity-[0.9]"
            >
                
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                <h1 
                
                className="Welcome-text text-[13px]">
                   {encyptionText("Easiest way to Build Applications")}
                </h1>
            </motion.div>
            
            <motion.div
          
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 text-6xl justify-center font-bold text-white max-w-[600px] w-auto h-auto"
            >
                <span 
                className=""
                >
                    
                    {encyptionText("Providing")}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                    {encyptionText("the best")} {" "}
                    </span>
                    
                  
                    {encyptionText("in security, development and innovation.")}
                </span>

            </motion.div>

            <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
                {encyptionText("addad")}
            </motion.p>

            <motion.a
              onMouseEnter={() => cursorChangeHandler("cursor-hover")}
              onMouseLeave={() => cursorChangeHandler("cursor")}
              className="py-2 button-primary text-center text-white rounded-lg max-w-[200px]"
            href="https://wa.me/+971562064458"
            target="_blank"
                variants={slideInFromLeft(1)}
                >
               {encyptionText("Diving in our Space!")}
            </motion.a>
      
        </div>
       
       
        {/* <motion.div variants={slideInFromRight(0.8)}className=" w-[20%] h-[5px]  z-[20] flex items-center justify-center "></motion.div> */}
    </motion.div>
    );
};

export default HeroContent;
