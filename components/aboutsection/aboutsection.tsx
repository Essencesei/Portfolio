import React from "react";
import Image from "next/image";
import Icons from "./icons";
import DownloadCV from "./downloadcv";

const Aboutsection = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-8">
        About me
      </h2>
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1 flex justify-center items-center my-12 md:my-0">
          <Image
            src={"/about.svg"}
            alt={"about_code"}
            width={400}
            height={400}
          ></Image>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-8">
          <p className="leading-7 text-center md:text-start ">
           As a junior web developer, I'm currently honing my skills in HTML, CSS, JavaScript, TypeScript, MongoDB, Prisma, Node.js, and React, with a strong focus on Next.js for crafting robust digital solutions. Recently, I've expanded my toolkit to include CakePHP for PHP development, Docker for containerization, and MySQL for relational database management. I'm deeply passionate about learning and thrive on crafting user-friendly experiences. My goal is to deliver quality, scalable solutions with meticulous attention to detail. Excited to contribute and grow within the ever-evolving tech field
          </p>
          <h3 className="text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400 ">
            Tech Stack
          </h3>

          <Icons />

          <DownloadCV />
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
