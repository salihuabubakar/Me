import React from 'react';
import styles from "./bubble.module.css";

interface props {
  text: String;
}

export default function BubbleText({ text }: props) {
  return (
    <h2 className="text-center lg:text-8xl md:text-6xl sm:text-4xl text-[#222831]">
      {text.split("").map((child, idx) => (
        <span className={`${styles.hoverText} dark:invert`} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};