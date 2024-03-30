"use client"
import React, { createContext, useState,useContext } from "react";
import { LanguageContext } from "@/context/languageContext";

export const EncryptionContext = createContext({
  isEncryption: false,
  encryptionChangeHandler: (_: any) => {
    console.log(_);
  },
});

const EncryptionContextProvider = (props: { children: any }) => {
  const [isEncryption, setEncryptionType] = useState(false);
  const {languageType,LanguageChangeHandler} = useContext(LanguageContext);

  const encryptionChangeHandler = (isEncryption: React.SetStateAction<boolean>) => {
    console.log(languageType)
    if(isEncryption){
      document.documentElement.style.setProperty("font-family","Flow Rounded")
    }else{
      if(languageType=="ar"){
        document.documentElement.style.setProperty("font-family", "Noto Sans Arabic")
      }else{
        document.documentElement.style.setProperty("font-family", "Varela Round")
      }
    }
    setEncryptionType(isEncryption);
    
  };

  return (
    <EncryptionContext.Provider
      value={{
        isEncryption: isEncryption,
        encryptionChangeHandler: encryptionChangeHandler,
      }}
    >
      {props.children}
    </EncryptionContext.Provider>
  );
};

export default EncryptionContextProvider;