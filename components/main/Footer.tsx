"use client";
import React,{useContext,useState,useEffect} from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import {FaYoutube} from "react-icons/fa";
import { MouseContext } from "@/context/mouse-context";
import Spline from '@splinetool/react-spline';

const Footer = () => {
        const hasWindow = typeof window !== 'undefined';

    const [size, setSize] = useState(hasWindow?window.innerWidth:9);
    console.log(window.innerHeight, window.innerWidth)
    useEffect(() => {
      window.addEventListener("resize", () => {
        console.log(window.innerHeight, window.innerWidth)
        setSize(window.innerWidth)
    });
    });
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
      return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-0 z-[20] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
              <div 
               onMouseEnter={() => cursorChangeHandler("cursor-hover")}
               onMouseLeave={() => cursorChangeHandler("cursor")}
              className="w-full h-[200px] z-[99] items-center justify-center" style={{scale:size *0.001}} >
              <Spline   scene="https://prod.spline.design/QoPV-qbZbW4VHHcN/scene.splinecode"   />
              </div>
              <span className="text-[15px] ml-[6px]">{size}</span>
                {/* <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 z-[20]">
                        <a href="" className="flex flex-row items-center ml-[6px] hover:text-purple-500 ">
                        <FaYoutube/>
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                            </a>
                        </p>
                        <p 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 z-[20]">
                        <a href="" className="flex flex-row items-center ml-[6px] hover:text-purple-500 ">
                        <RxGithubLogo/>
                            <span className="text-[15px] ml-[6px]">Github</span>
                            </a>
                        </p>
                        <p 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 z-[20]">
                        <a href="" className="flex flex-row items-center ml-[6px] hover:text-purple-500 ">
                        <RxDiscordLogo/>
                            <span className="text-[15px] ml-[6px]">Descord</span>
                            </a>
                        </p>
                    </div>


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 z-[20]">
                        <a href="" className="flex flex-row items-center ml-[6px] hover:text-purple-500 ">
                        <FaYoutube/>
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                            </a>
                        </p>
                        <p 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 z-[20]">
                        <a href="" className="flex flex-row items-center ml-[6px] hover:text-purple-500 ">
                        <RxGithubLogo/>
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                            </a>
                        </p>
                        <p 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 z-[20]">
                        <a href="" className="flex flex-row items-center ml-[6px] hover:text-purple-500 ">
                        <RxDiscordLogo/>
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </a>
                        </p>
                    </div>


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p 
                           onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                           onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer z-[20] ">
                            <a href="" className="text-[15px] ml-[6px] hover:text-purple-500 ">Become Sponsor</a>
                        </p>
                        <p 
                           onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                           onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer z-[20] ">
                            <a href="" className="text-[15px] ml-[6px] hover:text-purple-500 ">Learning about me</a>
                        </p>
                        <p 
                           onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                           onMouseLeave={() => cursorChangeHandler("cursor")}
                        className="flex flex-row items-center my-[15px] cursor-pointer z-[20] ">
                            <a href="mailto:hello@ba3.co" className="text-[15px] ml-[6px] hover:text-purple-500 ">hello@ba3.co</a>
                        </p>
                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                
                </div> */}
                {/* <div className="mb-[20px] text-[0px] text-center">
                   {width}
                </div> */}
                <div className="mb-[20px] text-[15px] text-center">
                    &copy;  Copyright 2024, All Rights Reserved.
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                     Made with 💜 by BA3.co
                </div>
            </div>
        </div>
    )
}

export default Footer