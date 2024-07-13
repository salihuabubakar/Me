"use client"
import React from "react";
import Image from "next/image";
import Header from "../Components/Header";
import { Space_Grotesk } from "next/font/google";

interface CareerPops {
  id: number,
  careerTitle: string,
  careerImg: string,
  careerImgAlt: string,
  careerDesc: string
  careerStartDate: string,
  careerEndDate: string,
  cardPosition: string
}

const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})

export default function Career() {

  const careerList: CareerPops[] = [
    {
      id: 0,
      careerTitle: "Peepal Tree",
      careerImg: "/peepal-tree-logo.png",
      careerImgAlt: "Peepal Tree Logo",
      careerDesc: 
        ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
      careerStartDate: "2019",
      careerEndDate: "2020",
      cardPosition: "left"
    },
    {
      id: 1,
      careerTitle: "Timart",
      careerImg: "/timart-logo.png",
      careerImgAlt: "Timart Logo",
      careerDesc: 
        ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
      careerStartDate: "2020",
      careerEndDate: "2024",
      cardPosition: "right"
    }
  ];

  return (
    <>
      <Header optionalLink="/" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="timeline-container">
          {careerList?.map((careers: CareerPops, index: number) => {
            const { id, careerTitle, careerImg, careerImgAlt, careerDesc, careerStartDate, careerEndDate, cardPosition } = careers;
            return (
              <React.Fragment key={index}>
                <div key={id} className={`inner-timeline-container timeline-${cardPosition}-container`}>
                  <Image
                    className="timeline-image"
                    src={careerImg}
                    alt={careerImgAlt}
                    width={50}
                    height={50}
                    priority
                  />
                  <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
                    <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>{careerTitle}</h2>
                    <small>{`${careerStartDate} - ${careerEndDate}`}</small>
                    <p>
                      {careerDesc}
                    </p>
                    <span className={`timeline-${cardPosition}-container-arrow`}></span>
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
