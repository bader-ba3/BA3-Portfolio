"use client";
import { useContext } from "react";

import React from "react";
import {motion} from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import { MouseContext } from "@/context/mouse-context";
const HeroContent = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] mt-36"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[13px]">
                       Easiest way to Build Applications
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span className="text-sm md:text-base lg:text-lg xl:text-xl">
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                        </span>
                        in security, development, and innovation.
                    </span>

                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    Empowering businesses with innovative solutions, we specialize in mobile app and web development, ensuring seamless user experiences. Our cybersecurity services protect your digital assets, while our engaging videos educate users on secure practices.
                </motion.p>

                <div
                onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                onMouseLeave={() => cursorChangeHandler("cursor")}
                className="py-2 button-primary text-center text-white rounded-lg max-w-[200px]">
                <motion.a
                href="https://wa.me/+971562064458"
                target="_blank"
                    variants={slideInFromLeft(1)}
                    >
                    Diving in our Space!
                </motion.a>
            </div>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
