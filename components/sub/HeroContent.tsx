"use client";
import { useContext, useState } from "react";

import React from "react";
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

const HeroContent = () => {
    var isLcked = true
    const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    // const isTouchscreen = useState(IsTouchscreen);  
    function onMouseDown(e: { target: { name: string; }; }) {
        isLcked=!isLcked
        encryptionChangeHandler(isLcked)
      }
    return (
      
        
        <motion.div
            initial="hidden"
            animate="visible"
            // className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] mt-36">
            className="flex flex-col items-center justify-center px-20  mt-20 w-full z-[20] xl:flex-row">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start  z-[20]">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[13px]">
                       {encyptionText("Easiest way to Build Applications")}
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
                    {encyptionText("Empowering businesses with innovative solutions, we specialize in mobile app and web development, ensuring seamless user experiences. Our cybersecurity services protect your digital assets, while our engaging videos educate users on secure practices.")}
                </motion.p>

              
                <motion.a
                  onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                  onMouseLeave={() => cursorChangeHandler("cursor")}
                  className="py-2 button-primary text-center text-white rounded-lg max-w-[200px]"
                href="https://wa.me/+971562064458"
                target="_blank"
                    variants={slideInFromLeft(1)}
                    >
                   {encyptionText(" Diving in our Space!")}
                </motion.a>
          
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className=" w-full h-full flex justify-center items-center py-20 z-[10]"
            >
              
                {/* <Spline scene="https://prod.spline.design/oKGmfKZpMBGwEBd9/scene.splinecode" style={{scale :"1.4"}}  */}
                <Spline scene="https://prod.spline.design/1wZ9HaYRCqaHjsQ2/scene.splinecode" style={{scale :"0.7"}} 
                 onMouseDown={onMouseDown}
                />


                {/* <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                /> */}
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
