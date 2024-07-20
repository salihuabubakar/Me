"use client"
import React from "react";
import { useParams  } from "next/navigation";
import Image from "next/image";
import Header from "../../Components/Header";
import { Space_Grotesk } from "next/font/google";
import { useFetchPosts } from "@/util/hooks/postHook";
import { PostDetails } from "@/util/types/post";

const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})

const Page = () => {
  const { slug: url } = useParams();
  const { data, loading, error } = useFetchPosts();
  return (
    <>
      <Header optionalLink="/" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="timeline-container">
          {data?.map((post: PostDetails, index: number) => {
            const { id, title, slug, description, author, createdAt } = post;
            const date = new Date(createdAt);

            // Define options for formatting
            const options: Intl.DateTimeFormatOptions = {
              weekday: 'short', // 'Mon', 'Tue', 'Wed', etc.
              day: '2-digit',   // '01', '02', ..., '31'
              month: 'short',    // 'Jan', 'Feb', ..., 'Dec'
              year: 'numeric'   // '2024'
            };

            // Format the date
            const formattedDate = date.toLocaleDateString('en-GB', options)
              .replace(',', ''); // Remove the comma if needed

            if(url === slug) {
              return (
                <React.Fragment key={index}>
                  <div key={id} className={`inner-timeline-container timeline-lleft-container`}>
                    <Image
                      className="timeline-image"
                      src='/cover-img.webp'
                      alt='javascript banner'
                      width={50}
                      height={50}
                      priority
                    />
                    <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
                      <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>{title}</h2>
                      <b className="dark:text-[#C5C5C5] text-[#222831]">{author.name}</b> <br />
                      <small>{formattedDate}</small>
                      <p>
                        {description}
                      </p>
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