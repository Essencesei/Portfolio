import React from "react";
import Homesection from "@/components/homesection";
import Aboutsection from "@/components/aboutsection";
import Projectsection from "@/components/projectsection";
import Contactsection from "@/components/contact/contactsection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <section
          className="md:h-screen flex scroll-my-20 mt-32 md:mt-0"
          id="home"
        >
          <Homesection />
        </section>
        <section className="md:h-screen scroll-my-20" id="about">
          <Aboutsection />
        </section>

        <section
          className=" md:min-h-screen md:max-h-fit scroll-my-20 "
          id="projects"
        >
          <Projectsection />
        </section>
        <section
          className="md:h-screen -scroll-my-52 md:scroll-my-20"
          id="contact"
        >
          <Contactsection />
        </section>
      </div>
    </>
  );
};

export default Home;
