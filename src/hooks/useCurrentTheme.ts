import { useState } from "react"

export const useCurrentTheme = (defaultValue: string = "dark") => {
    const [currentTheme, setCurrentTheme] = useState<string>(() => {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || defaultValue;
    });
  
    const setTheme = (theme: string) => {
      setCurrentTheme(theme);
      localStorage.setItem("theme", theme);
      document.body.setAttribute("theme", theme)
    };
  
    return { currentTheme, setTheme };
  };
