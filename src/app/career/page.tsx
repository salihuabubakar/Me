"use client"
import Image from "next/image";
import Header from "../Components/Header";
import { Space_Grotesk } from "next/font/google";


const space_grotesk = Space_Grotesk({
  weight: '700',
  subsets: ['latin'],
})

export default function Career() {
  return (
    <>
      <Header optionalLink="/" />
      <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 sm:p-0">
        <div className="timeline-container">
          <div className="inner-timeline-container timeline-left-container">
            <Image
              className="timeline-image"
              src="/me.png"
              alt="Salihu's Logo"
              width={50}
              height={50}
              loading="lazy"
            />
            <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
              <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>Sample 1</h2>
              <small>2020 - 2024</small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="timeline-left-container-arrow"></span>
            </div>
          </div>

          <div className="inner-timeline-container timeline-right-container">
            <Image
              className="timeline-image"
              src="/google.png"
              alt="Salihu's Logo"
              width={50}
              height={50}
              loading="lazy"
            />
            <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
              <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>Sample 2</h2>
              <small>2020 - 2024</small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="timeline-right-container-arrow"></span>
            </div>
          </div>

          <div className="inner-timeline-container timeline-left-container">
            <Image
              className="timeline-image"
              src="/flipkart.png"
              alt="Salihu's Logo"
              width={50}
              height={50}
              loading="lazy"
            />
            <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
              <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>Sample 3</h2>
              <small>2020 - 2024</small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="timeline-left-container-arrow"></span>
            </div>
          </div>

          <div className="inner-timeline-container timeline-right-container">
            <Image
              className="timeline-image"
              src="/tesla.png"
              alt="Salihu's Logo"
              width={50}
              height={50}
              loading="lazy"
            />
            <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
              <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>Sample 4</h2>
              <small>2020 - 2024</small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="timeline-right-container-arrow"></span>
            </div>
          </div>

          <div className="inner-timeline-container timeline-left-container">
            <Image
              className="timeline-image"
              src="/youtube.png"
              alt="Salihu's Logo"
              width={50}
              height={50}
              loading="lazy"
            />
            <div className="timeline-text bg-[#c4c8b8] dark:bg-[#1d1d1d] dark:text-[#C5C5C5] text-[#000000] shadow-xl">
              <h2 className={`${space_grotesk.className} text-2xl text-[#222831] dark:text-[#C5C5C5]`}>Sample 5</h2>
              <small>2020 - 2024</small>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="timeline-left-container-arrow"></span>
            </div>
          </div>
        </div>
    </main>
    </>
  );
}
