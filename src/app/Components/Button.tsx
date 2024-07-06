"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";


const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ themeFromLocalStorage, setThemeFromLocalStorage ] = useState<string | null>("");  

  useEffect(() => {
    theme === 'system' ? systemTheme : theme;
    const themeLocalStorage = localStorage.getItem("theme");
    setThemeFromLocalStorage(themeLocalStorage);

  }, [theme, systemTheme, themeFromLocalStorage])

    return (
      <>
        <div className="relative flex w-fit items-center rounded-full">
          <button
            className={`${TOGGLE_CLASSES} ${
              theme === "light" ? "text-white" : "text-slate-300"
            }`}
            onClick={() => {
              setTheme('light');
            }}
            title='Light'
          >
            <FiMoon className="relative z-10 text-lg md:text-sm" />
          </button>
          <button
            className={`${TOGGLE_CLASSES} ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            onClick={() => {
              setTheme("dark");
            }}
            title='Dark'
          >
            <FiSun className="relative z-10 text-lg md:text-sm" />
          </button>
          <div
            className={`absolute inset-0 z-0 flex ${
              themeFromLocalStorage === "dark" ? "justify-end" : "justify-start"
            }`}
          >
            <motion.span
              layout
              transition={{ type: "spring", damping: 15, stiffness: 250 }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
            />
          </div>
        </div>
      </>
    )
}

export default Button