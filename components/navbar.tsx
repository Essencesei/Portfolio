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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="z-50 flex justify-between p-3 items-center fixed w-full shadow select-none backdrop-blur-lg ">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl ">Essencesei</h1>
        </Link>
        <div className="hidden md:block">
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
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"}>
                <IoMenu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="h-8"></div>
              </SheetHeader>

              <div className="flex flex-col w-full">
                <SheetClose asChild>
                  <Link href={"#home"} className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"#about"}
                    className={navigationMenuTriggerStyle()}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"#projects"}
                    className={navigationMenuTriggerStyle()}
                  >
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"#contact"}
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>

              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
