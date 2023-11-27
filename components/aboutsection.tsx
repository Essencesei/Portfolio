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
import { Button, buttonVariants } from "./ui/button";

const Aboutsection = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-8">
        About me
      </h2>
      <div className="flex flex-col md:flex-row ">
        <div className="flex-1 flex"></div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-8">
          <p className="leading-7">
            An aspiring full stack developer, I&apos;m building skills in HTML,
            CSS, JavaScript, TypeScript, MongoDB, Prisma, Node.js, and React. I
            focus on Next.js to create strong digital solutions. I&apos;m
            passionate about learning, crafting user-friendly experiences, and
            delivering quality, scalable solutions with attention to detail.
            Excited to contribute and grow within the ever-evolving tech field.
          </p>
          <h3 className="text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400 ">
            Tech Stack
          </h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <SiHtml5 className="h-8 w-8 " />
            <SiCss3 className="h-8 w-8 " />
            <SiJavascript className="h-8 w-8 " />
            <SiTypescript className="h-8 w-8 " />
            <SiTailwindcss className="h-8 w-8 " />
            <SiReact className="h-8 w-8 " />
            <SiNextdotjs className="h-8 w-8 " />
            <SiPrisma className="h-8 w-8 " />
            <SiNodedotjs className="h-8 w-8 " />
            <SiExpress className="h-8 w-8 " />
            <SiMongodb className="h-8 w-8 " />
            <SiMongoose className="h-8 w-8 " />
          </div>

          <a
            className={`${buttonVariants({
              className: "w-full rounded-3xl md:w-1/3 ",
            })}`}
            download="Resume-Dumlao_Jonathan"
            href="/Dumlao-Jonathan-G_Resume_Updated (3).pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
