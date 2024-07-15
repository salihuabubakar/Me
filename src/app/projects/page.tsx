"use client"
import React from 'react';
import Image from "next/image";
import Header from "../Components/Header";
import BubbleText from '../Components/BubbleText';
import Link from 'next/link';
import { Space_Grotesk } from "next/font/google";

interface Card {
  id: number,
  cardTitle: string,
  cardLink: string,
  cardImg: string,
  cardImgAlt: string
}

const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})

export default function Project() {

  const cards: Card[] = [
    {
      id: 0,
      cardTitle: "Peepal Tree Careers",
      cardLink: "https://peepal-tree-careers.vercel.app",
      cardImg: "/peepal-tree-career.webp",
      cardImgAlt: "peepal tree career website"
    },
    {
      id: 1,
      cardTitle: "Peepal Tree Management System",
      cardLink: "https://staging-hr-ms.vercel.app",
      cardImg: "/peepal-tree-app.webp",
      cardImgAlt: "peepal tree Management System App"
    }
  ];
  
  return (
    <>
      <Header optionalLink='/' />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="cards rounded-lg bg-[#c4c8b8] dark:bg-[#1d1d1d] shadow-xl">
          <div style={{ position: "sticky", top: 0}} className='work-title'>
            <BubbleText text="LATEST WORK" />
          </div>
          {cards?.map((card: Card, index: number) => {
            const { id, cardTitle, cardLink, cardImg, cardImgAlt } = card
            return (
              <React.Fragment key={index}>
                <div key={id} className="card">
                  <div className='card-title'>
                    <h2 className={`${space_grotesk.className} text-1xl text-[#C5C5C5]`}>{cardTitle}</h2>
                    <Link className='border rounded card-linking' href={cardLink}>
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
                      src={cardImg}
                      alt={cardImgAlt}
                      width={900}
                      height={37}
                      priority
                    />
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </main>
    </>
  );
}
