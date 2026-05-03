import { useEffect, useState } from "react";
import { ThemeContext } from "./theme-context";

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-body");
    }
    else {
      document.body.classList.remove("dark-body");
    }
  }, [darkMode])

  return(
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
