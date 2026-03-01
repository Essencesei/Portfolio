import React from "react";
import Image from "next/image";
import { SiFacebook, SiGithub } from "react-icons/si";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Homesection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center gap-10 md:items-start">
        <h1 className="text-balance bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-400 lg:text-6xl">
          Jonathan <br className="md:hidden" />
          Dumlao
        </h1>
        <h3 className="text-balance scroll-m-20 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-400 lg:text-4xl">
          Web <br className="md:hidden" /> Developer
        </h3>

        <p className="text-pretty text-center leading-7 md:text-start">
          Hey there! I&apos;m Jonathan. Join me as I bring ideas to life and
          explore the endless possibilities of web development.
        </p>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href={"https://github.com/Essencesei"}
            className={buttonVariants({ variant: "outline" })}
          >
            <SiGithub className="h-6 w-6"></SiGithub>
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/jonathan-dumlao/"}
            className={buttonVariants({ variant: "outline" })}
          >
            <Linkedin className="h-6 w-6"></Linkedin>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-1 items-center justify-center md:mt-0">
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
