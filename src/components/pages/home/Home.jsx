import React from "react";
import About from "./About/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Banner from "./banner/Banner";
import TechSkills from "./tech-skills/TechSkills";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <TechSkills/>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
