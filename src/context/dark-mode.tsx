import useLocalStorageState from "@hook/use-local-storage-state";
import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }: { children: React.ReactNode }) {

  const [isDarkMode, setIsDarkMode] = useLocalStorageState("isDarkMode", window.matchMedia("(prefers-color-scheme: dark)").matches)
  
  const toggleDarkMode = () => setIsDarkMode((prv) => !prv);
  
  useEffect(()=> {
    if(isDarkMode){
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.documentElement.classList.add('light-mode')
    }
  },[isDarkMode])
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
