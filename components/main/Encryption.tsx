"use client";
import React from "react";

import {motion} from "framer-motion";
import {slideInFromLeft,
    slideInFromRight,slideInFromTop} from "@/utils/motion";
import Image from "next/image";
import  encyptionText  from "../../utils/encyptionText";

const Encryption = () => {
    return (
        <div className="flex flex-row relative items-center justify-center  w-full h-[75vh]">
            
            <div className="absolute w-auto h-auto top-0 z-[5]">
            
            <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    {encyptionText("Performance")}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        {encyptionText("&")}{" "}
                    </span>
                    {encyptionText("Security")}
                </motion.div>
             </div>
            <div
                className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
              

                <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                    <h1 className="Welcome-text text-[12px]">{encyptionText("Encryption")}</h1>
                </div>
                <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[35px] text-white font-medium mt-[0px] text-center mb-[0px]'
            >
                {encyptionText("Hardened security")}
            </motion.div>
                <motion.p
                    className="text-[15px] text-white my-5 max-w-[600px] text-center px-[20px]"
                >
                    {encyptionText("encrypt_des")} <br /> {encyptionText("(not even us).")}
                </motion.p>
            </div>
        

            {/* <div className=" w-full flex items-start justify-center absolute muted  px-[20px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    html5-video="true"
                    preload="false"
                    
                    className="abcd muted='true' w-auto h-auto volume='0'"
                    src="/encryption.webm/"
                />
            </div> */}

            <div className=" w-full flex items-start justify-center absolute muted  px-[20px] z-[-10]">
            <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/encryption.mp4"
                    />
            </div>
        </div>
    );
};

export default Encryption;
