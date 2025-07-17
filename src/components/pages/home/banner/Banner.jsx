import React from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <section className="bg-black pt-32 border-b border-double border-slate-600">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
            <div className="flex flex-col justify-center items-center lg:items-start ">
              <h1 className="text-white font-bold text-6xl ">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-950 to-gray-200 bg-clip-text text-transparent">
                  Kim
                </span>
              </h1>
              <h3 className="text-blue-400 font-bold text-2xl">
                Computer Science Student
              </h3>
              <p className="text-white mt-5 mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                fugiat quos vero inventore consequatur, illum enim placeat qui
                pariatur! Quos rem illum similique ducimus rerum ab ut officiis
                dicta dolor?
              </p>
              <div className=" flex gap-6">
                <button className="bg-gradient-to-r from-blue-950 to-gray-700  text-white border border-gray-400 rounded-xl p-4 hover:text-blue-500 hover:bg-white transition-all duration-300 ease-in-out">
                  View My Work
                </button>
                <button className="bg-transparent text-white border border-gray-400 rounded-xl p-4 hover:text-blue-500 hover:bg-white transition-all duration-300 ease-in-out">
                  Get In Touch
                </button>
              </div>
              <div className="text-4xl text-white my-10 ">
                <ul className="flex gap-5 justify-start items-center ">
                  <li className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                    <a href="https://github.com/kimeowiii">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                    <a href="belaoskimberly@gmail.com">
                      {" "}
                      <MdEmail />{" "}
                    </a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                    <FaFacebookSquare />
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                    <FaInstagram />
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                    <FaYoutube />
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center lg:-mt-10 hidden">
              <div className="rounded-3xl rotate-45  size-72 shadow-blue-800/50 shadow-2xl overflow-hidden"> <img className="-rotate-45 -mt-60 -ml-20 size-[39rem] hidden lg:flex" src="/img/about-me.png" alt="" /></div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Banner;
