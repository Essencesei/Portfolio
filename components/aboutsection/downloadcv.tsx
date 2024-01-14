"use client";
import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const DownloadCV = () => {
  return (
    <>
      <motion.a
        whileTap={{ scale: 1.05 }}
        whileHover={{ scale: 1.05 }}
        className={`${buttonVariants({
          className: "w-full  md:w-1/3 ",
        })}`}
        download="Resume-Dumlao_Jonathan"
        href="/Resume_Jonathan_G_Dumlao.pdf"
      >
        Download CV
      </motion.a>
    </>
  );
};

export default DownloadCV;
