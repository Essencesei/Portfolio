import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge, badgeVariants } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Projectsection = () => {
  const projectList = [
    {
      title: "Reflection Sphere",
      description:
        "A simple blogging app where user can upload image, create and modify posts",
      imageUrl: "/reflectionsphere.jpg",
      imageAlt: "reflectionsphere",
      tech: ["Next js", "Prisma", "MongoDB", "Next Auth", "Tailwind CSS"],
      githubLink: "https://github.com/Essencesei/Reflection-Sphere",
      liveDemoLink: "https://reflection-sphere-essencesei.vercel.app/",
    },
    {
      title: "Todo Application",
      description:
        "A simple todo application where user can privately create their task",
      imageUrl: "/todoapp.png",
      imageAlt: "todoapp",
      tech: ["Next js", "Prisma", "MongoDB", "Next Auth", "Tailwind CSS"],
      githubLink: "https://github.com/Essencesei/Todo-App",
      liveDemoLink: "https://todo-app-essencesei.vercel.app/",
    },
  ];

  return (
    <>
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400 mb-8">
        Projects
      </h2>

      <div className="grid grid-cols-1  gap-8 md:grid-cols-2">
        {projectList.map((project) => {
          return (
            <div key={project.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md  overflow-hidden  w-full ">
                    <Image
                      className="w-full hover:scale-105 transition-transform duration-500"
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      width={400}
                      height={600}
                    ></Image>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => {
                      return (
                        <Badge key={tech} variant={"outline"}>
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      target="_blank"
                      className={badgeVariants({ variant: "outline" })}
                      href={project.githubLink}
                    >
                      <SiGithub className="w-4 h-4"></SiGithub>
                    </Link>
                    <Link
                      target="_blank"
                      className={badgeVariants({ variant: "outline" })}
                      href={project.liveDemoLink}
                    >
                      Live Demo
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projectsection;
