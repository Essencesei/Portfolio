"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { FaArrowUp } from "react-icons/fa";

export const Scrollup = () => {
  return (
    <Link href={"#home"} className={buttonVariants({ size: "icon" })}>
      <FaArrowUp className="w-5"></FaArrowUp>
    </Link>
  );
};
