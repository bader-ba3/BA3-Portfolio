"use client"
import React, { createContext, useState } from "react";

export const EncryptionContext = createContext({
  isEncryption: false,
  encryptionChangeHandler: (_: any) => {
    console.log(_);
  },
});

const EncryptionContextProvider = (props: { children: any }) => {
  const [isEncryption, setEncryptionType] = useState(false);

  const encryptionChangeHandler = (isEncryption: React.SetStateAction<boolean>) => {
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