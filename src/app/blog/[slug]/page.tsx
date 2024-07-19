"use client"
import React from "react";
import { useParams  } from "next/navigation";
import Image from "next/image";
import Header from "../../Components/Header";
import { Space_Grotesk } from "next/font/google";

interface CareerPops {
  id: number,
  careerTitle: string,
  slug: string,
  role: string,
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

const careerList: CareerPops[] = [
  {
    id: 0,
    careerTitle: "Peepal Tree",
    slug: "full-stack-software-engineer",
    role: "Full Stack Software Engineer",
    careerImg: "/peepal-tree-logo.webp",
    careerImgAlt: "Peepal Tree Logo",
    careerDesc: 
      `
        I enhanced user interfaces and interactions with a focus on accessibility and ease of use, increased testing
        coverage with unit and integration tests, migrated the codebase from React-axios to React Query while 
        maintaining high standards, and modernized the web app to boost user trust and satisfaction for seamless operation.
      `,
    careerStartDate: "Oct 2022",
    careerEndDate: "Present",
    cardPosition: "left"
  },
  {
    id: 1,
    careerTitle: "Freelance",
    slug: "it-instructor",
    role: "IT Instructor",
    careerImg: "/default-logo.webp",
    careerImgAlt: "Peepal Tree Logo",
    careerDesc: 
      `
        I have taught software engineering to children aged 11-12, focusing on problem-solving and creativity through coding projects.
        Additionally, I provide IT advice and support for student projects, elders, and others, and mentor aspiring developers
        towards their tech industry goals.
      `,
    careerStartDate: "Jan 2020",
    careerEndDate: "Present",
    cardPosition: "right"
  },
  {
    id: 2,
    careerTitle: "Nigerian Government",
    slug: "nysc",
    role: "Nysc",
    careerImg: "/nysc-logo.webp",
    careerImgAlt: "Nysc Logo",
    careerDesc: 
      ` 
        I collaborated with team leads, product managers, and designers to deliver customer-focused solutions. 
        By modernizing the web app, I increased user trust and satisfaction. Additionally, I curated a comprehensive product 
        category list using MS Office Suite, significantly improving sales and company value.
      `,
    careerStartDate: "Aug 2023",
    careerEndDate: "Jul 2024",
    cardPosition: "left"
  },
  {
    id: 3,
    careerTitle: "Timart",
    slug: "frontEnd-developer",
    role: "FrontEnd Developer",
    careerImg: "/timart-logo.webp",
    careerImgAlt: "Timart Logo",
    careerDesc: 
      ` 
        I collaborated with team leads, product managers, and designers to deliver customer-focused solutions. 
        By modernizing the web app, I increased user trust and satisfaction. Additionally, I curated a comprehensive product 
        category list using MS Office Suite, significantly improving sales and company value.
      `,
    careerStartDate: "Mar 2022",
    careerEndDate: "Sep 2022",
    cardPosition: "right"
  },
  {
    id: 4,
    careerTitle: "Eduflix Limited",
    slug: "internship",
    role: "Internship",
    careerImg: "/default-logo.webp",
    careerImgAlt: "default image",
    careerDesc: 
      `
        I have gained practical experience in software development methodologies and project management, 
        enhancing my problem-solving skills through close collaboration with a senior software engineer. 
        I also developed a CRUD operating solution for my organization, streamlining operations for future 
        interns and solidifying my technical expertise.
      `,
    careerStartDate: "Nov 2020",
    careerEndDate: "Dec 2021",
    cardPosition: "left"
  },
];

const Page = () => {
  const { slug: url } = useParams();
  return (
    <>
      <Header optionalLink="/" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="timeline-container">
          {careerList?.map((careers: CareerPops, index: number) => {
            const { id, careerTitle, slug, role, careerImg, careerImgAlt, careerDesc, careerStartDate, careerEndDate, cardPosition } = careers;
            if(url === slug) {
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
                      <b className="dark:text-[#C5C5C5] text-[#222831]">{role}</b> <br />
                      <small>{`${careerStartDate} - ${careerEndDate}`}</small>
                      <p>
                        {careerDesc}
                      </p>
                      <span className={`timeline-${cardPosition}-container-arrow`}></span>
                    </div>
                  </div>
                </React.Fragment>
              )
            }
          })}
        </div>
      </main>
    </>
  );
}

export default Page;