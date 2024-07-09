import React from "react";
import {
  SiLinkedin,
  SiTwitter,
  SiGithub
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import Link from "next/link";

export const LinksContainer = () => {
  return (
    <div className="dark:bg-[#1d1d1d] bg-transparent px-4 py-12 w-full mt-24 shadow-xl">
      <div className="mx-auto sm:m-0">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y dark:divide-[#C5C5C5] divide-neutral-900 border dark:border-[#C5C5C5] border-neutral-900">
      <div className="grid grid-cols-2 divide-x dark:divide-[#C5C5C5] divide-neutral-900">
        <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/salihu-abubakar-177086201/" />
        <LinkBox Icon={SiTwitter} href="https://x.com/SAkutiriko" />
      </div>
      <div className="grid grid-cols-1 dark:divide-[#C5C5C5] divide-neutral-900">
        <LinkBox Icon={SiGithub} href="https://github.com/salihuabubakar" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: any = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: any = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: any) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: any) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: any) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: any) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <Link
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 text-[#000000] dark:text-white"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white dark:text-[#000000]"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl " />
      </div>
    </Link>
  );
};