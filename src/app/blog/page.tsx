"use client"
import React, { FC } from "react";
import Image from "next/image";
import Header from "../Components/Header";
import { Space_Grotesk } from "next/font/google";
import Link from 'next/link';
import { useFetchPosts } from "@/util/hooks/postHook";
import { PostDetails } from "@/util/types/post";

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
        <div className="timeline-container">
          {data?.map((careers: PostDetails, index: number) => {
            const { id, title, slug, description, author, createdAt } = careers;
            return (
              <React.Fragment key={index}>
                <div key={id} className={`inner-timeline-container timeline-left-container`}>
                <Link href={`/blog/${slug}`}>{title}</Link>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </main>
    </>
  );
}

export default Post;