"use client"
import React, { createContext, useState,useContext } from "react";
import { EncryptionContext } from "@/context/encryptContext";
import { useIntl } from 'react-intl';

export const LanguageContext = createContext({
  languageType: "en",
  LanguageChangeHandler: (_: any) => {
    console.log(_);
  },
});

const LanguageContextProvider = (props: { children: any }) => {

  console.log( window.navigator.language);
  console.log( window.navigator.language);
  console.log( window.navigator.language);
  var defaultLang ="en"
  if(window.navigator.language.toLocaleLowerCase().includes("ar")){
    defaultLang="ar"
  }
  const [languageType, setLanguageType] = useState(defaultLang);
  
  const { isEncryption, encryptionChangeHandler } = useContext(EncryptionContext);
  
  const LanguageChangeHandler = () => {
    console.log("isEncryption "+isEncryption)
    console.log("languageType "+languageType)
    console.log("_")
    if(isEncryption){
      document.documentElement.style.setProperty("font-family","Flow Rounded")
      if(languageType=="ar"){
          setLanguageType("en");
          
        }else{
          setLanguageType("ar");
        }
    }else 
   { if(languageType=="ar"){
    document.documentElement.style.setProperty("font-family", "Varela Round")
      setLanguageType("en");
     
    }else{
      document.documentElement.style.setProperty("font-family", "Noto Sans Arabic")
      setLanguageType("ar");
    }
    
  }
  console.log("isEncryption "+isEncryption)
  console.log("languageType "+languageType)
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