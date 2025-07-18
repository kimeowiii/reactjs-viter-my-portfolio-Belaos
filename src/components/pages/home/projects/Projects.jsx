import React from "react";
import CardProject from "../../../partials/CardProject";

const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section id="projects" className="bg-black py-20 ">
        <div className="container mx-auto px-4 py-3">
          <h2 className="text-center text-6xl font-extrabold text-white">
            My Projects
          </h2>
          <p className="text-white mt-5  mb-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam natus unde at consequatur distinctio iusto nemo dignissimos voluptate minima!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-16">
              <CardProject img={"/img/project.webp"} alt={"Project1"} title={"Project 1"} tools={"Html, Css, Php, Java"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis recusandae nam ipsum? Repudiandae labore ipsam minima quidem nisi tempore cupiditate."}/>
              <CardProject img={"/img/project.webp"} alt={"project2"} title={"Project 2"} tools={"Html, Css, Php, Python, React"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis recusandae nam ipsum? Repudiandae labore ipsam minima quidem nisi tempore cupiditate."}/>
              <CardProject img={"/img/project.webp"} alt={"Project3"} title={"Project 3"} tools={"TailwindCss, MySQL, Php, JavaScript"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis recusandae nam ipsum? Repudiandae labore ipsam minima quidem nisi tempore cupiditate."}/>
             
          </div>
          <div className="flex items-center justify-center mt-10"><a className="bg-blue-600/50 rounded-2xl size-fit p-4 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border  transition-all duration-300 ease-in-out" href="#">View all</a></div>
          
        </div>
      </section>
    </>
  );
};

export default Projects;
