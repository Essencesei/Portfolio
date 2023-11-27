"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Contactform } from "./Contactform";
import Image from "next/image";

const Contactsection = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-8">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center my-12 md:my-0">
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
