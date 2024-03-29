import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/OurSpaceText";
import {slideInFromLeft,
    slideInFromRight,slideInFromTop} from "@/utils/motion";
import {motion} from "framer-motion";
import  encyptionText  from "../../utils/encyptionText";

const OurSpace = () => {
    return (
        <div
            id="our-space"
            className="flex flex-col items-center justify-center gap-3  h-full relative overflow-hidden pb-80 py-20 inset-0 z-[20]"
            style={{transform: "scale(0.9"}}
        > 
        <div className="mb-[25vh] text-[15px] text-center">
                
        </div>
            <div className=" w-full h-full flex  justify-center top-0 z-[5]">
           
            <motion.div
                    variants={slideInFromTop}
                    className="text-[50px] font-medium text-center text-gray-200"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                       {encyptionText("Our Space",)}
                    </span>
                </motion.div>
             </div>
             
            <SkillText/>
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.mp4"
                    />
                </div>
            </div> 

        </div>
    );
};

export default OurSpace;
