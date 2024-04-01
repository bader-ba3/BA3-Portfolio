"use client"
import { Socials } from "@/constants";
// import Image from "next/image";
import React,{useContext} from "react";
import { MouseContext } from "@/context/mouse-context";
import { EncryptionContext } from "@/context/encryptContext";
import { LanguageContext } from "@/context/languageContext";
import  encyptionText  from "../../utils/encyptionText";

const Navbar = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);
    const hasWindow = typeof window !== 'undefined';
    const {languageType,LanguageChangeHandler} = useContext(LanguageContext);

    return (
        <div 
        style={{direction:languageType=="ar"?"rtl":"ltr"}}
        className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            
                <a className="h-auto w-auto flex flex-row items-center">
                    <img
                        src="/NavLogo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <span className="w-[120px] font-bold ml-[10px] px-2 text-white"style={{fontSize:"22px"}}>
                       {encyptionText("BA3")}
                    </span>
                </a> 
                      {/* <div className="hidden md:w-[500px] md:flex md:flex-row md:items-center md:justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
                        <a 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        href={hasWindow?window.location.protocol+"//"+window.location.host+"/#about-us":"#about-us"} className="cursor-pointer hover:text-purple-500">
                            {encyptionText("About us")}
                        </a>
                        <a 
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        href={hasWindow?window.location.protocol+"//"+window.location.host+"/#encryption":"#encryption"} className="cursor-pointer hover:text-purple-500">
                            {encyptionText("Encryption")}
                        </a>
                        <a
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                        href={hasWindow?window.location.protocol+"//"+window.location.host+"/#projects":"#projects"} className="cursor-pointer hover:text-purple-500">
                            {encyptionText("Our Projects")}
                        </a>
                    </div>
                </div> */}
              
                <div className="flex flex-row gap-4 items-center justify-between">
                <a
                         onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                         onMouseLeave={() => cursorChangeHandler("cursor")}
                         onMouseDown ={() => LanguageChangeHandler("ar")}
                         className="cursor-pointer text-white hover:text-purple-500">
                            <span className="w-[40px] font-bold ml-[10px] text-white hover:text-purple-500">
                       {isEncryption ?encyptionText("oooooo"):encyptionText("lang")}
                    </span>
                        </a>
                    {Socials.map((social) => (
                        <a 
                        onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                        onMouseLeave={() => cursorChangeHandler("cursor")}
                        href={social.link} className="cursor-pointer px-[5px] " target="_blank" key={social.name}>
                           { isEncryption
                           ? <span className="w-[20px] font-bold  text-white">
                           {encyptionText("ooo")}
                            </span>
                            :
                            <img
                                
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                style={{ cursor: "pointer" }}
                            />}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
