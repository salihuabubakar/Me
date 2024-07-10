"use client"
import React from 'react';
import Image from "next/image";
import Header from "../Components/Header";
import BubbleText from '../Components/BubbleText';
import Link from 'next/link';


export default function Project() {
  return (
    <>
      <Header optionalLink='/' />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="cards rounded-lg bg-[#c4c8b8] dark:bg-[#1d1d1d] shadow-xl">
          <div style={{ position: "sticky", top: 0}} className='work-title'>
            <BubbleText text="LATEST WORK" />
          </div>
          <div className="card">
            <div className='card-title'>
              <p>Card One</p>
              <Link className='border rounded card-linking' href="http://www.w3.org/2000/svg">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_359_2361" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                  <rect x="9" y="9" width="24" height="24" fill="currentColor"></rect>
                  </mask>
                  <g mask="url(#mask0_359_2361)">
                  <path d="M15.4 27L14 25.6L23.6 16H15V14H27V26H25V17.4L15.4 27Z" fill="currentColor"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className='card-body'>
              <Image
                className="Img"
                src="/ex.PNG"
                alt="Salihu's Logo"
                width={900}
                height={37}
                loading="lazy"
              />
            </div>
          </div>
          <div className="card">
            <div className='card-title'>
              <p>Card Two</p>
              <Link className='border rounded' href="http://www.w3.org/2000/svg">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_359_2361" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                  <rect x="9" y="9" width="24" height="24" fill="currentColor"></rect>
                  </mask>
                  <g mask="url(#mask0_359_2361)">
                  <path d="M15.4 27L14 25.6L23.6 16H15V14H27V26H25V17.4L15.4 27Z" fill="currentColor"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className='card-body'>
              <Image
                className="Img"
                src="/ex.PNG"
                alt="Salihu's Logo"
                width={900}
                height={37}
                loading="lazy"
              />
            </div>
          </div>
          <div className="card">
            <div className='card-title'>
              <p>Card Three</p>
              <Link className='border rounded' href="http://www.w3.org/2000/svg">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_359_2361" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                  <rect x="9" y="9" width="24" height="24" fill="currentColor"></rect>
                  </mask>
                  <g mask="url(#mask0_359_2361)">
                  <path d="M15.4 27L14 25.6L23.6 16H15V14H27V26H25V17.4L15.4 27Z" fill="currentColor"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className='card-body'>
              <Image
                className="Img"
                src="/ex.PNG"
                alt="Salihu's Logo"
                width={900}
                height={37}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
