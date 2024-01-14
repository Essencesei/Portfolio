"use client";
import { animate, motion } from "framer-motion";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";

const Icons = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      y: -20,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const icons = [
    { name: "html", icon: <SiHtml5 className="h-8 w-8" /> },
    { name: "css", icon: <SiCss3 className="h-8 w-8" /> },
    { name: "javascript", icon: <SiJavascript className="h-8 w-8" /> },
    { name: "typescript", icon: <SiTypescript className="h-8 w-8" /> },
    { name: "tailwindcss", icon: <SiTailwindcss className="h-8 w-8" /> },
    { name: "react", icon: <SiReact className="h-8 w-8" /> },
    { name: "nextdotjs", icon: <SiNextdotjs className="h-8 w-8" /> },
    { name: "prisma", icon: <SiPrisma className="h-8 w-8" /> },
    { name: "nodedotjs", icon: <SiNodedotjs className="h-8 w-8" /> },
    { name: "express", icon: <SiExpress className="h-8 w-8" /> },
    { name: "mongodb", icon: <SiMongodb className="h-8 w-8" /> },
    { name: "mongoose", icon: <SiMongoose className="h-8 w-8" /> },
  ];

  return (
    <>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex gap-4 flex-wrap justify-center"
      >
        {icons.map((icon) => {
          return (
            <motion.li
              key={icon.name}
              variants={item}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.8 }}
            >
              {icon.icon}
            </motion.li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default Icons;
