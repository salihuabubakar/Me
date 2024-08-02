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
          {loading ? (
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              viewBox='0 0 200 200'
              >
              <circle fill='#C5C5C5' stroke='#C5C5C5' stroke-width='2' r='15' cx='40' cy='65'>
                <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4'></animate>
              </circle>
              <circle fill='#C5C5C5' stroke='#C5C5C5' stroke-width='2' r='15' cx='100' cy='65'>
                <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.2'></animate>
              </circle>
              <circle fill='#C5C5C5' stroke='#C5C5C5' stroke-width='2' r='15' cx='160' cy='65'>
                <animate attributeName='cy' calcMode='spline' dur='2' values='65;135;65;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0'></animate>
              </circle>
            </svg>
          ) : error ? <Card><h2 className={`mt-2 text-2xl text-[#222831] dark:text-[#C5C5C5]`}>Error Loading Data</h2></Card> : (
            <>
              {data && data?.length > 0 ? data?.map((careers: PostDetails, index: number) => {
                const { _id, title, slug, introduction, author, createdAt } = careers;
                return (
                  <Card className="bg-[#c4c8b8] dark:bg-[#1d1d1d] rounded shadow-xl" key={index} index={index}>
                    <Link href={`/blog/${slug}`}>
                      <h2 className={`${space_grotesk.className} mt-2 text-2xl text-[#222831] dark:text-[#C5C5C5]`}>{`#${index + 1} ${title}`}</h2>
                      <CardHeader>
                        <small className="cardHeader_account dark:text-[#C5C5C5] text-[#222831]">Author: {author.name}</small>
                        <small className="cardHeader_date dark:text-[#C5C5C5] text-[#222831]">{dateFormatter(createdAt)}</small>
                      </CardHeader>
                      <CardBody>
                        <p className="cardText dark:text-[#C5C5C5] text-[#222831]">{introduction}</p>
                      </CardBody>
                    </Link>
                  </Card>
                )
                })
                : <Card><h2 className={`mt-2 text-2xl text-[#222831] dark:text-[#C5C5C5]`}>No Posts yet.</h2></Card>
              }
            </>
          )}
        </DeckContainer>
      </main>
    </>
  );
}

export default Post;