import React, { FC } from 'react';
import {
  FiEdit,
  FiChevronDown,
  FiDownload,
  FiHome,
  FiBookOpen
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import Button from './Button';
import Link from 'next/link';

interface OptionalLikProp {
  optionalLink?: string
}


const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

const Option = ({ text, Icon, setOpen, link, download }: any) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md dark:text-[#c5c5c5] hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 dark:hover:text-[#000] transition-colors cursor-pointer"
    >
      <Link className='flex place-items-center gap-2 w-full' href={link}>
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>
          {text}
        </span>
      </Link>
    </motion.li>
  );
};

const Header: FC <OptionalLikProp> = ({ optionalLink }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 flex justify-between header-stick">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800 dark:bg-[#c5c5c5] hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 transition-all duration-100 transition-colors"
        >
          <span className="font-medium text-sm">Navigations</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col  p-2 rounded-lg bg-[#c4c8b8] dark:bg-[#1d1d1d] shadow-xl absolute top-[120%] left-[70%] w-48 overflow-hidden z-50"
        > 
          {optionalLink && <Option setOpen={setOpen} Icon={FiHome} text="Home" link={`${optionalLink}`} />}
          <Option setOpen={setOpen} Icon={FiBookOpen} text="Blog" link="/blog" />
          <Option setOpen={setOpen} Icon={FiEdit} text="Career" link="/career" />
          <Option setOpen={setOpen} Icon={GoProjectSymlink} text="Works" link="/projects" />
          <Option setOpen={setOpen} Icon={FiDownload} text="Download Resume" link="/000SALIHU-KUTIRIKO-ABUBAKAR.pdf" />
        </motion.ul>
      </motion.div>

      <Button />
    </div>
  );
} 

export default Header;


