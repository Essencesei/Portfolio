"use client";
import { motion } from "framer-motion";
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
      {icons.map((icon) => {
        return (
          <motion.div
            key={icon.name}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            {icon.icon}
          </motion.div>
        );
      })}
    </>
  );
};

export default Icons;
