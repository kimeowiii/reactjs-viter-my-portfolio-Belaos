import React from "react";
import Header from "../../partials/Header";
import About from "./About/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "../../partials/Footer";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
