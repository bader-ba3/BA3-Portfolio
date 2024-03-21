"use client"
import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "cursor",
  cursorChangeHandler: (_) => {
    console.log(_);
  },
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("cursor");

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;