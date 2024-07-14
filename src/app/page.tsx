"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import { Space_Grotesk, Poppins, Rubik } from "next/font/google";
import Header from "./Components/Header";
import BubbleText from "./Components/BubbleText";
import FadeInSection from "./Components/FadeInSection";
import FuzzyOverlay from "./Components/FuzzyOverlay";
import { LinksContainer } from "./Components/ClipPathLink";
import {
  FiDownload,
  FiArrowRight
} from "react-icons/fi";
import Link from "next/link";

const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})
const poppins = Rubik({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col place-items-center lg:p-24 sm:p-0">
        <div className="container w-full shadow-xl">
          <FadeInSection>
            <div className="img-bg-container relative overflow-hidden shadow-xl">
              <FuzzyOverlay />
            </div>
            <div className="my-img-container flex justify-center">
              <Image
                className="z-50 img "
                src="/me-light.png"
                alt="Salihu's Logo"
                width={460}
                height={37}
                loading="lazy"
                style={{ height: "500px"}}
              />
            </div>
          </FadeInSection>
        </div>
        <BubbleText text="Salihu Kutiriko Abubakar" />
        <span className={`lg:text-5xl md:text-3xl text-[#222831] dark:text-[#C5C5C5] ${space_grotesk.className}`}>
          A Software  <Typewriter options={{strings: ['Engineer', 'Developer'], autoStart: true, loop: true}}/>
        </span>

        <div className="navigator">
          <Link href="#welcome-section">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 262 403" width="262" height="403" preserveAspectRatio="xMidYMid meet"
              style={{width: '40px', height: '40px', transform: 'translate3d(0px, 0px, 0px)', 
              contentVisibility: 'visible'}}
            >
              <defs>
                <clipPath id="__lottie_element_2"><rect width="262" height="403" x="0" y="0"></rect></clipPath>
                <clipPath id="__lottie_element_4"><path d="M0,0 L262,0 L262,403 L0,403z"></path></clipPath>
                <clipPath id="__lottie_element_10">
                  <path fill={`#222831`} clipRule="nonzero" d=" M131,0 C131,0 131,0 131,0 C203.34930419921875,0 262,58.650699615478516 262,131 C262,131 262,272 262,272 C262,344.34930419921875 203.34930419921875,403 131,403 C131,403 131,403 131,403 C58.650699615478516,403 0,344.34930419921875 0,272 C0,272 0,131 0,131 C0,58.650699615478516 58.650699615478516,0 131,0 C131,0 131,0 131,0 C131,0 131,0 131,0" 
                    fillOpacity="1"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_2)">
                <g clipPath="url(#__lottie_element_4)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                  <g clipPath="url(#__lottie_element_10)" transform="matrix(1,0,0,-0.9998999834060669,0,403)" opacity="1" style={{display: 'block'}}>
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill={`#222831`} fillOpacity="0" d=" M415.5,-209 C415.5,-209 -138.5,-209 -138.5,-209 C-138.5,-209 -138.5,627 -138.5,627 C-138.5,627 415.5,627 415.5,627 C415.5,627 415.5,-209 415.5,-209z"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" strokeDasharray=" 0 0" strokeDashoffset="0" stroke={`#222831 `} strokeOpacity="1" strokeWidth="30" 
                  d=" M131,0 C131,0 131,0 131,0 C203.34930419921875,0 262,58.650699615478516 262,131 C262,131 262,272 262,272 C262,344.34930419921875 203.34930419921875,403 131,403 C131,403 131,403 131,403 C58.650699615478516,403 0,344.34930419921875 0,272 C0,272 0,131 0,131 C0,58.650699615478516 58.650699615478516,0 131,0 C131,0 131,0 131,0 C131,0 131,0 131,0z">
                </path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" strokeDasharray=" 0 0" strokeDashoffset="0" stroke={`#222831 `} strokeOpacity="1" strokeWidth="30" 
                  d=" M131,0 C131,0 131,0 131,0 C203.34930419921875,0 262,58.650699615478516 262,131 C262,131 262,272 262,272 C262,344.34930419921875 203.34930419921875,403 131,403 C131,403 131,403 131,403 C58.650699615478516,403 0,344.34930419921875 0,272 C0,272 0,131 0,131 C0,58.650699615478516 58.650699615478516,0 131,0 C131,0 131,0 131,0 C131,0 131,0 131,0z">
                </path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" strokeDasharray=" 0 0" strokeDashoffset="0" stroke={`#222831 `} strokeOpacity="1" strokeWidth="30" 
                  d=" M131,0 C131,0 131,0 131,0 C203.34930419921875,0 262,58.650699615478516 262,131 C262,131 262,272 262,272 C262,344.34930419921875 203.34930419921875,403 131,403 C131,403 131,403 131,403 C58.650699615478516,403 0,344.34930419921875 0,272 C0,272 0,131 0,131 C0,58.650699615478516 58.650699615478516,0 131,0 C131,0 131,0 131,0 C131,0 131,0 131,0z">
                </path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" strokeDasharray=" 0 0" strokeDashoffset="0" stroke={`#222831 `} strokeOpacity="1" strokeWidth="30" 
                  d=" M131,0 C131,0 131,0 131,0 C203.34930419921875,0 262,58.650699615478516 262,131 C262,131 262,272 262,272 C262,344.34930419921875 203.34930419921875,403 131,403 C131,403 131,403 131,403 C58.650699615478516,403 0,344.34930419921875 0,272 C0,272 0,131 0,131 C0,58.650699615478516 58.650699615478516,0 131,0 C131,0 131,0 131,0 C131,0 131,0 131,0z">
                </path>
              </g>
              </g>
              <g transform="matrix(1,0,0,1,101,85.37251281738281)" opacity="1" style={{display: 'block'}}><g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill={`#222831`} fillOpacity="1" 
                d=" M60,30 C60,46.569000244140625 46.569000244140625,60 30,60 C13.430999755859375,60 0,46.569000244140625 0,30 C0,13.430999755859375 13.430999755859375,0 30,0 C46.569000244140625,0 60,13.430999755859375 60,30 C60,30 60,30 60,30 C60,30 60,30 60,30z">
                </path>
                </g>
                </g>
                </g>
                </g>
            </svg>
          </Link>
        </div>

        <FadeInSection>
          <div id="welcome-section" className="rounded dark:divide-[#C5C5C5] divide-neutral-900 divide-x shadow-xl">
            <div className={`dark:text-[#C5C5C5] text-[#000000] text-2xl sm:divide-none ${poppins.className} statment`}> 
              <span className={`text-3xl ${space_grotesk.className}`}>Hi, welcome to Salihu’s page.</span> <br /> <br />
              Salihu has a Bachelor of Science in Computer Science, 
              over the past years, he has acquired a ton lot of knowledge and experience as a software engineer. <br /> <br />
              <span>He has worked with companies and individuals to <span><Typewriter options={{strings: ['create', 'build', ' maintain'], autoStart: true, loop: true, delay: 500}}/></span> inovative software solutions.</span>
            </div>
            <div className="dark:text-[#C5C5C5] text-2xl flex-col space-y-24 btn-section">
              <div className="mt-5">
                <Link href="/001SALIHU-KUTIRIKO-ABUBAKAR.pdf" download className="rounded-2xl w-full ml-2 border-2 border-dashed dark:border-[#C5C5C5] border-black bg-transparent px-6 py-3 font-semibold uppercase dark:hover:text-[#c5c5c5] text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  Salihu’s Resume <FiDownload style={{ display: "inline"}} />
                </Link>
              </div>
              <div>
                <Link href="/career" className="rounded-2xl ml-2 border-2 border-dashed dark:border-[#C5C5C5] border-black bg-transparent px-6 py-3 font-semibold uppercase dark:hover:text-[#c5c5c5] text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  Go to careers <FiArrowRight style={{ display: "inline"}} />
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>

        <LinksContainer />
        
      </main>
    </>
  );
}
