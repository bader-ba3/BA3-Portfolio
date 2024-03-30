"use client"
import React, { createContext, useState,useContext } from "react";
import { EncryptionContext } from "@/context/encryptContext";

export const LanguageContext = createContext({
  languageType: "en",
  LanguageChangeHandler: (_: any) => {
    console.log(_);
  },
});

const LanguageContextProvider = (props: { children: any }) => {

  // console.log( window.navigator.language);
  const [languageType, setLanguageType] = useState("en");
  const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);

  const LanguageChangeHandler = () => {
    console.log("isEncryption "+isEncryption)
    console.log("languageType "+languageType)
    console.log("_")
    if(isEncryption){
      document.documentElement.style.setProperty("font-family","Flow Rounded")
    }else 
   { if(languageType=="ar"){
    document.documentElement.style.setProperty("font-family", "Varela Round")
      setLanguageType("en");
     
    }else{
      document.documentElement.style.setProperty("font-family", "Noto Sans Arabic")
      setLanguageType("ar");
    }
    
  }
  console.log("isEncryption"+isEncryption)
  console.log("languageType"+languageType)
  console.log("+++")
  };

  return (
    <LanguageContext.Provider
      value={{
        languageType: languageType,
        LanguageChangeHandler: LanguageChangeHandler,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;