"use client"
import React from "react";
import Image from "next/image";
import Header from "../Components/Header";
import { Space_Grotesk } from "next/font/google";
import Link from 'next/link';

interface CareerPops {
  id: number,
  careerTitle: string,
  slug: string,
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
      slug: "full-stack-software-engineer",
      cardPosition: "left"
    },
    {
      id: 1,
      careerTitle: "Freelance",
      slug: "it-instructor",
      cardPosition: "right"
    },
    {
      id: 2,
      careerTitle: "Nigerian Government",
      slug: "nysc",
      cardPosition: "left"
    },
    {
      id: 3,
      careerTitle: "Timart",
      slug: "frontEnd-developer",
      cardPosition: "right"
    },
    {
      id: 4,
      careerTitle: "Eduflix Limited",
      slug: "internship",
      cardPosition: "left"
    },
  ];

  return (
    <>
      <Header optionalLink="/" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="timeline-container">
          {careerList?.map((careers: CareerPops, index: number) => {
            const { id, careerTitle, slug, cardPosition } = careers;
            return (
              <React.Fragment key={index}>
                <div key={id} className={`inner-timeline-container timeline-${cardPosition}-container`}>
                <Link href={`/blog/${slug}`}>{careerTitle}</Link>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </main>
    </>
  );
}
