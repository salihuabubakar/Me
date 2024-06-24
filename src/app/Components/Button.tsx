"use client"
import React, { useEffect } from 'react'
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";


const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    theme === 'system' ? systemTheme : theme;
  }, [theme, systemTheme])

    return (
      <>
        <div>
          <div className="relative flex w-fit items-center rounded-full">
            <button
              className={`${TOGGLE_CLASSES} ${
                theme === "light" ? "text-white" : "text-slate-300"
              }`}
              onClick={() => {
                setTheme('light');
              }}
            >
              <FiMoon className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10">Light</span>
            </button>
            <button
              className={`${TOGGLE_CLASSES} ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
              onClick={() => {
                setTheme("dark");
              }}
            >
              <FiSun className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10">Dark</span>
            </button>
            <div
              className={`absolute inset-0 z-0 flex ${
                theme === "dark" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
              />
            </div>
          </div>
        </div>
      </>
    )
}

export default Button