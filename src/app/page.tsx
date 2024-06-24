"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import { Space_Grotesk, Poppins, Rubik } from "next/font/google";
import Header from "./Components/Header";
import BubbleText from "./Components/BubbleText";
import FadeInSection from "./Components/FadeInSection";
import FuzzyOverlay from "./Components/FuzzyOverlay";

const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})
const poppins = Rubik({
  weight: '600',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col place-items-center  p-24 dark:invert">
        <div className="container w-full">
          <FadeInSection>
            <div className="img-bg-container relative overflow-hidden">
              <FuzzyOverlay />
            </div>
            <div className="my-img-container flex justify-center">
              <Image
                className="z-50 img"
                src="/me-light.png"
                alt="Salihu's Logo"
                width={460}
                height={37}
                priority
                style={{ height: "500px"}}
              />
            </div>
          </FadeInSection>
        </div>
        <BubbleText text="Salihu Kutiriko Abubakar" />
        <span className={`text-5xl text-[#222831] ${space_grotesk.className}`}>
          A Software  <Typewriter options={{strings: ['Engineer', 'Developer'], autoStart: true, loop: true}}/>
        </span>

        <FadeInSection>
          <h1>Section 2</h1>
          <p>This section will also fade in when it enters the viewport.</p>
        </FadeInSection>
      </main>
    </>
  );
}
