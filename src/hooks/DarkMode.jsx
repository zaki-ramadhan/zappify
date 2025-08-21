/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

// Buat Context
const DarkMode = createContext();

// Custom hook untuk akses context
export const useDarkMode = () => useContext(DarkMode);

// Provider untuk global state
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Ambil dark mode dari localStorage (jika ada)
    return localStorage.getItem("darkMode") === "true";
  });

  // Simpan perubahan darkMode ke <html> dan localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkMode.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};
