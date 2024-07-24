"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Header from "../Components/Header";
import { Space_Grotesk } from "next/font/google";
import Link from 'next/link';
import { useFetchPosts } from "@/util/hooks/postHook";
import { PostDetails } from "@/util/types/post";
import { dateFormatter } from "@/util/dateFormat";
import { DeckContainer, Card, CardHeader, CardBody } from "../Components/blogContainer";

const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})

const Post = () => {

  const { data, loading, error } = useFetchPosts();
  return (
    <>
      <Header optionalLink="/" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <DeckContainer>
          {data?.map((careers: PostDetails, index: number) => {
            const { id, title, slug, description, author, createdAt } = careers;
            return (
              <Card className="bg-[#c4c8b8] dark:bg-[#1d1d1d] rounded shadow-xl" key={index} index={index}>
                <Link href={`/blog/${slug}`}>
                  {/* <Image
                    className="banner-image"
                    src='/cover-img.webp'
                    alt='javascript banner'
                    width={50}
                    height={50}
                  /> */}
                  <h2 className={`${space_grotesk.className} mt-2 text-2xl text-[#222831] dark:text-[#C5C5C5]`}>{`#${index + 1} ${title}`}</h2>
                  <CardHeader>
                    <small className="cardHeader_account dark:text-[#C5C5C5] text-[#222831]">Author: {author.name}</small>
                    <small className="cardHeader_date dark:text-[#C5C5C5] text-[#222831]">{dateFormatter(createdAt)}</small>
                  </CardHeader>
                  <CardBody>
                    <p className="cardText dark:text-[#C5C5C5] text-[#222831]">Hong Kong gov’t tells schools to remove books breaching security law</p>
                  </CardBody>
                </Link>
              </Card>
            )
          })}
        </DeckContainer>
      </main>
    </>
  );
}

export default Post;