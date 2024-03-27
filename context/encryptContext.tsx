"use client"
import React, { createContext, useState } from "react";

export const EncryptionContext = createContext({
  isEncryption: true,
  encryptionChangeHandler: (_: boolean) => {
    console.log(_);
  },
});

const EncryptionContextProvider = (props: { children: any }) => {
  const [isEncryption, setEncryptionType] = useState(true);

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