"use client"
import React, { createContext, useState,useContext } from "react";
import { LanguageContext } from "@/context/languageContext";

export const EncryptionContext = createContext({
  isEncryption: true,
  encryptionChangeHandler: (_: any) => {
    console.log(_);
  },
});

const EncryptionContextProvider = (props: { children: any }) => {
  const [isEncryption, setEncryptionType] = useState(true);
  const {languageType,LanguageChangeHandler} = useContext(LanguageContext);

  const encryptionChangeHandler = (_isEncryption: React.SetStateAction<boolean>) => {
    setEncryptionType(_isEncryption);
    if(_isEncryption){
      document.documentElement.style.setProperty("font-family","Flow Rounded")
    }else{
      if(languageType=="ar"){
        document.documentElement.style.setProperty("font-family", "Noto Sans Arabic")
      }else{
        document.documentElement.style.setProperty("font-family", "Varela Round")
      }
    }
    
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