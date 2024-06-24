import React from 'react';
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import Button from './Button';


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

const Option = ({ text, Icon, setOpen, link }: any) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href={link}
        >
          {text}
        </a>
      </span>
    </motion.li>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 flex justify-between">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 transition-all duration-100 transition-colors"
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
          className="flex flex-col gap-2 p-2 rounded-lg bg-transparent shadow-xl absolute top-[120%] left-[70%] w-48 overflow-hidden z-50"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="About" link="/projects" />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" link="" />
          <Option setOpen={setOpen} Icon={FiShare} text="Share" link="" />
          <Option setOpen={setOpen} Icon={FiTrash} text="Remove" link="" />
        </motion.ul>
      </motion.div>

      <Button />
    </div>
  );
} 



