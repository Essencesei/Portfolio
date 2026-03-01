import React from "react";
import Homesection from "@/components/homesection";
import Aboutsection from "@/components/aboutsection/aboutsection";
import Projectsection from "@/components/projectsection";
import Contactsection from "@/components/contact/contactsection";

const Home = () => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4">
        <section
          className="mt-32 flex scroll-my-20 md:mt-0 md:h-screen"
          id="home"
        >
          <Homesection />
        </section>
        <section className="scroll-my-20 md:h-screen" id="about">
          <Aboutsection />
        </section>

        <section
          className="scroll-my-20 md:max-h-fit md:min-h-screen"
          id="projects"
        >
          <Projectsection />
        </section>
        <section
          className="-scroll-my-52 md:h-screen md:scroll-my-20"
          id="contact"
        >
          <Contactsection />
        </section>
      </div>
    </>
  );
};

export default Home;
