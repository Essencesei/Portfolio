import Link from "next/link";
import React from "react";
import { SiFacebook, SiGithub, SiLinkedin, SiTiktok } from "react-icons/si";
import { buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="h-12 flex  justify-center gap-2 mt-10 md:mt-0">
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/jonathan-dumlao/"}
          className={buttonVariants({ variant: "outline" })}
        >
          <SiLinkedin />
        </Link>
        <Link
          target="_blank"
          href={"https://github.com/Essencesei"}
          className={buttonVariants({ variant: "outline" })}
        >
          <SiGithub />
        </Link>

        <Link
          target="_blank"
          href={"https://www.tiktok.com/@essencesei"}
          className={buttonVariants({ variant: "outline" })}
        >
          <SiTiktok />
        </Link>
      </div>
      <div className="pb-14">
        <h5 className="text-center">Essencesei</h5>
      </div>
    </>
  );
};

export default Footer;
