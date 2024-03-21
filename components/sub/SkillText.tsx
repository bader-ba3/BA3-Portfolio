"use client"
import { useContext } from "react";

import React  from 'react'
import {motion} from 'framer-motion'
import {slideInFromLeft, slideInFromRight, slideInFromTop} from '@/utils/motion'
import {SparklesIcon} from '@heroicons/react/24/solid'
import { MouseContext } from "@/context/mouse-context";

const SkillText = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center z-[30]'>
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                <h1 className="Welcome-text text-[13px]">
                    Think better with Ba3 
                </h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)}className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'></motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='text-[20px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Never miss a task, deadline or idea
            </motion.div>

        
            <motion.div variants={slideInFromLeft(0.5)}className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'></motion.div>
            <motion.div variants={slideInFromLeft(0.5)}className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'></motion.div>
        
            <div
                onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                onMouseLeave={() => cursorChangeHandler("cursor")}
                className="text-[30px] py-10 px-[6%] button-primary text-center  text-white cursor-pointer rounded-lg w-[100hv] h-[70hv] font-bold z-[30]">
                <motion.a
                href="https://wa.me/+971562064458"
                target="_blank"
                    variants={slideInFromLeft(1)}
                    >
                     DIVING IN OUR SPACE!
                </motion.a>
            </div>
        
        </div>
    )
}

export default SkillText