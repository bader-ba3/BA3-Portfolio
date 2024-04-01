"use client";
import { Socials } from "@/constants";
// import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MouseContext } from "@/context/mouse-context";
import { EncryptionContext } from "@/context/encryptContext";
import { LanguageContext } from "@/context/languageContext";
import encyptionText from "../../utils/encyptionText";
import { Dropdown } from "react-bulma-components";
import Script from "next/script";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { isEncryption, encryptionChangeHandler } =
    useContext(EncryptionContext);
  const hasWindow = typeof window !== "undefined";
  const { languageType, LanguageChangeHandler } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const initialReaf: any = null;

  let menuRef = useRef(initialReaf);

    useEffect(()=>{
        let hundler =(e)=>{
            if(menuRef!.current!=null){
                if(!menuRef!.current!.contains(e.target)){
                    setIsOpen(false)
                }
            }
           
            
        }
         if(hasWindow)document.addEventListener("click",hundler)
         
         return()=>{
            document.removeEventListener("click",hundler);
         }
    })
  return (
    <div
      style={{ direction: languageType == "ar" ? "rtl" : "ltr" }}
      className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] z-[-10]">
        <a className="h-auto w-auto flex flex-row items-center z-[-10]">
          <img
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span
            className="w-[120px] font-bold ml-[10px] px-2 text-white z-[-10]"
            style={{ fontSize: "22px" }}
          >
            {encyptionText("BA3")}
          </span>
        </a>

        <div className=" relative flex flex-col item-center z-[100] w-[200px] right-[3px] hover:text-purple-600" ref={menuRef}>
          <button
            onClick={() => 
                
                setIsOpen((prev) => !prev)
                }
            className=" w-full z-[100]  flex items-center justify-center text-white tracking-wider rounded-lg active:border-white active:text-white hover:text-purple-600"
          >
            {"Contact us"}
            
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8" />
            ) : (
              <AiOutlineCaretUp className="h-8" />
            )}
          </button>
          {isOpen && (
            <div
              className="  absolute top-10 flex flex-col item-start rounded-lg p-2 w-full  gap-5"
              style={{
                backdropFilter: "blur(100px)",
                backgroundImage:
                  "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
              }}
            >
              {Socials.map((item, i) => (
                <a
                //   onClick={() => setIsOpen(false)}
                  onMouseEnter={() => cursorChangeHandler("cursor-hover")}
                  onMouseLeave={() => cursorChangeHandler("cursor")}
                  href={item.link}  target="_blank" key={item.name}
                  className=" flex flex-row item-start gap-2 text-white hover:text-purple-600"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    width={24}
                    height={24}
                    style={{ cursor: "pointer" }}
                  />
                  <h3 className="z-[-1]">{item.name}</h3>
                </a>
              ))}
            </div>
          )}
        </div>

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

        {/* {Socials.map((social) => (
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
                    ))} */}
      </div>
    </div>
  );
};

export default Navbar;
