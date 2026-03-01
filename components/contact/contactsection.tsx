"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Contactform } from "./Contactform";
import Image from "next/image";

const Contactsection = () => {
  return (
    <div>
      <h2 className="text-balance mb-8 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-400">
        Contact
      </h2>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="my-12 flex flex-1 items-center justify-center md:my-0">
          <Image src={"/contact.svg"} alt={""} width={400} height={400}></Image>
        </div>
        <div className="flex-1">
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Contactsection;
