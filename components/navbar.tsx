"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./modetoggle";
import { buttonVariants } from "./ui/button";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="navbar  backdrop-blur-lg sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex flex-col dropdown-content mt-3 z-99 p-2 shadow bg-background  rounded-box w-56 ">
                <NavigationMenuItem>
                  <Link
                    href={"#home"}
                    className={navigationMenuTriggerStyle({
                      className: "w-[200px]",
                    })}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href={"#about"}
                    className={navigationMenuTriggerStyle({
                      className: "w-[200px]",
                    })}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href={"#projects"}
                    className={navigationMenuTriggerStyle({
                      className: "w-[200px]",
                    })}
                  >
                    Projects
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href={"#contact"}
                    className={navigationMenuTriggerStyle({
                      className: "w-[200px]",
                    })}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem></NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Link className={navigationMenuTriggerStyle()} href={"/"}>
            <h1 className="text-2xl"> Essencesei</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={"#home"} className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={"#about"} className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href={"#projects"}
                  className={navigationMenuTriggerStyle()}
                >
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href={"#contact"}
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="flex justify-between p-3 items-center sticky top-0 shadow select-none ">
  <h1 className="font-bold ">Essencesei</h1>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href={"#home"} className={navigationMenuTriggerStyle()}>
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href={"#about"} className={navigationMenuTriggerStyle()}>
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href={"#projects"} className={navigationMenuTriggerStyle()}>
          Projects
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href={"#contact"} className={navigationMenuTriggerStyle()}>
          Contact
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  {children}
</div>; */
}
