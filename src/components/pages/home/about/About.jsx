import React from "react";
import CardEducation from "../../../partials/CardEducation";
import CardExperience from "../../../partials/CardExperience";

const About = () => {
  return (
    <>
      {/* About */}
      <section className="bg-black py-20 border-b border-double border-slate-600">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 mb-16">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-6xl font-extrabold text-white">ABOUT ME</h2>
                <h4 className="text-6xl font-extrabold text-gray-600 opacity-45">
                  ABOUT ME
                </h4>
                <h6 className="text-6xl font-extrabold text-gray-700 opacity-25">
                  ABOUT ME
                </h6>
              </div>
              <p className="text-white flex items-center justify-center text-justify">
                Hello! I'm Kim, a dedicated computer science student at Bicol
                University Polangui, with a passion for web development. I have
                a basic knowledge of various programming languages and MS Office
                applications. I am eager to apply my problem-solving skills and
                continuously learn in a collaborative team environment as a web
                developer.
              </p>
            </div>

            <div className=" flex flex-col gap-8">
              <div>
                <h4 className="mb-5 font-bold text-2xl text-white">
                  Education
                </h4>
                <ol>
                  <li>
                    <CardEducation
                      institution={"Bicol University"}
                      date={"2022-Present"}
                      course={"BS in Computer Science"}
                    />
                  </li>
                  <li className="my-3">
                    <CardEducation
                      institution={
                        "Computer Arts and Technological College (CATC) Polangui"
                      }
                      date={"Dec. 2024 - Jan. 2025"}
                      course={
                        "Electronics Products Assembly and Servicing NCII "
                      }
                    />
                  </li>
                  <li>
                    <CardEducation
                      institution={"NRG Info-Tech Institute Inc."}
                      date={"June 2024 - July 2024"}
                      course={"Java programming NCIII"}
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
           <div className="bg-slate-700 rounded-xl p-5">
                <h4 className="mb-5 font-bold text-2xl text-white">
                  Training Experience
                </h4>
                <ol>
                  <li>
                    <CardExperience
                      institution={"UIP Incorporated"}
                      hours={"120 hrs."}
                      course={"Front-End Web Design"}
                    />
                  </li>
                  <li className="mt-3">
                    <CardExperience
                      institution={"Frontline Business Solutions, Inc."}
                      hours={"240 hrs."}
                      course={"Full-Stack Web Developer"}
                    />
                  </li>
                </ol>
              </div>
        </div>
      </section>
    </>
  );
};

export default About;
