"use client"
import React, { createContext, useState } from "react";

export const LanguageContext = createContext({
  languageType: "en",
  LanguageChangeHandler: (_: any) => {
    console.log(_);
  },
});

const LanguageContextProvider = (props: { children: any }) => {

  // console.log( window.navigator.language);
  const [languageType, setLanguageType] = useState("en");

  const LanguageChangeHandler = () => {
    
    if(languageType=="ar"){
      setLanguageType("en");
    }else{
      setLanguageType("ar");
    }
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