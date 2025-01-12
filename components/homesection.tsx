import React from "react";
import Image from "next/image";
import { SiFacebook, SiGithub } from "react-icons/si";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Homesection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex  flex-col gap-14 justify-center items-center md:items-start">
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Jonathan <br className="md:hidden" />
          Dumlao
        </h1>
        <h3 className="text-center  scroll-m-20 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Junior Web <br className="md:hidden" /> Developer
        </h3>

        <p className="leading-7 text-center md:text-start">
          Hey there! I&apos;m Jonathan, A junior web developer. Join me as I
          bring ideas to life and explore the endless possibilities of web
          development.
        </p>
        <div className="flex gap-2 ">
          <Link
            target="_blank"
            href={"https://github.com/Essencesei"}
            className={buttonVariants({ variant: "outline" })}
          >
            <SiGithub className="w-6 h-6"></SiGithub>
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/jonathan-dumlao/"}
            className={buttonVariants({ variant: "outline" })}
          >
            <Linkedin className="w-6 h-6"></Linkedin>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          priority
          className="rounded-full"
          src={"/pfp.jpg"}
          width={300}
          height={300}
          alt={""}
        ></Image>
      </div>
    </div>
  );
};

export default Homesection;
