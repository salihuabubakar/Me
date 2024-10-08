"use client"
import React from "react";
import { useParams  } from "next/navigation";
import Image from "next/image";
import Header from "../../Components/Header";
import { Space_Grotesk } from "next/font/google";
import { useFetchPosts } from "@/util/hooks/postHook";
import { PostDetails } from "@/util/types/post";
import { dateFormatter } from "@/util/dateFormat";
import { Container, CardHeader } from "@/app/Components/blogContainer";
import CodeSnippet from "../../Components/CodeSnippet";

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
        <Container className="w-fit">
          {data?.map((post: PostDetails, index: number) => {
            const { _id, title, slug, img_url, description, code, introduction, author, createdAt } = post;
            if(url === slug) {
              return (
                <React.Fragment key={index}>
                  <div className="bg-[#c4c8b8] dark:bg-[#1d1d1d] rounded shadow-xl p-2" key={_id}>
                    <Image
                      className="banner-image"
                      src={img_url}
                      alt='javascript banner'
                      width={460}
                      height={37}
                      priority
                    />
                    <h2 className={`${space_grotesk.className} mt-2 text-2xl text-[#222831] dark:text-[#C5C5C5]`}>{`#${index + 1} ${title}`}</h2>
                    <CardHeader>
                      <small className="cardHeader_account dark:text-[#C5C5C5] text-[#222831]">Author: {author.name}</small>
                      <small className="cardHeader_date dark:text-[#C5C5C5] text-[#222831]">{dateFormatter(createdAt)}</small>
                    </CardHeader>
                    <CardHeader>
                      <small className="cardHeader_account dark:text-[#C5C5C5] text-[#222831]">Introduction</small>
                    </CardHeader>
                    <p className="dark:text-[#C5C5C5] text-[#222831] whitespace-pre-wrap">
                      {introduction}
                    </p>
                    <div className="bg-[#282C34] dark:bg-transparent rounded shadow m-1">
                      {code?.map((code, index: number) => {
                        const { codeExplain } = code;
                        return (
                          <CodeSnippet key={index} codeDescription={codeExplain} />
                        )
                      })}
                    </div>
                    <div>
                      {
                        description?.map((d, index: number) => {
                          const { desc } = d;
                          return (
                            <p className="dark:text-[#C5C5C5] text-[#222831] whitespace-pre-wrap" key={index}>{desc}</p>
                          )
                        })
                      }
                    </div>
                  </div>
                </React.Fragment>
              )
            }
          })}
        </Container>
      </main>
    </>
  );
}

export default Page;