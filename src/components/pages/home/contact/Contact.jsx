import React from "react";
import { FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section className="bg-white pb-16">
        <div className="custom-shape-divider-top-1752763372">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 py-3">
          <h2 className=""></h2>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-6xl font-extrabold text-black">
            Contact Me
          </h2>
          <p className="text-black mt-5  mb-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam natus unde at consequatur distinctio iusto nemo dignissimos
            voluptate minima!
          </p>

          <div className="px-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14">
            <div className="rounded-lg flex items-center justify-start lg:justify-center">
              <ul className="flex flex-col gap-8">
                <li className="flex items-center gap-4 w-fit px-3 rounded-lg">
                  <div className="relative">
                    <FaLocationDot className="text-gray-600" />
                    <span className=" bg-blue-200/50 size-9 flex items-center rounded-full absolute -mt-[26px] -ml-[10px] "></span>
                  </div>
                  <div className="leading-4">
                    <p className="font-bold">Address</p>
                    <span className="text-gray-500">
                      <a href="https://www.google.com/maps/place/Pantao,+Libon,+Albay/@13.1934889,123.3204788,8059m/data=!3m1!1e3!4m6!3m5!1s0x33a171521a01b0ad:0xa2e3d6cc44042568!8m2!3d13.1996108!4d123.3430033!16s%2Fg%2F11f0wlxv7l!5m2!1e4!1e2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D">
                        <small>Pantao, Libon, Albay</small>
                      </a>
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4 w-fit px-3 rounded-lg">
                  <div className="relative">
                    <FaPhoneAlt className="text-gray-600" />
                    <span className=" bg-blue-200/50 size-9 flex items-center rounded-full absolute -mt-[26px] -ml-[10px] "></span>
                  </div>
                  <div className="leading-4">
                    <p className="font-bold">Phone</p>
                    <span className="text-gray-500">
                      <a href="tel:+63-951-211-9026">
                        <small>(+63)-951-211-9026</small>
                      </a>
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4 w-fit px-3 rounded-lg">
                  <div className="relative">
                    <FaEnvelope className="text-gray-600" />
                    <span className=" bg-blue-200/50 size-9 flex items-center rounded-full absolute -mt-[26px] -ml-[10px] "></span>
                  </div>
                  <div className="leading-4">
                    <p className="font-bold">E-mail</p>
                    <span className="text-gray-500">
                      <a href="mailto: belaoskimberly@gmail.com">
                        <small>belaoskimberly@gmail.com</small>
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-lg mt-5 drop-shadow-lg  ">
              <div className="">
                <p className="mb-3">Your Name</p>
                <input
                  className="border rounded-lg p-2 w-full"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <p className="mb-3">Email Address</p>
                <input
                  className="border rounded-lg p-2 w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <p className="mt-5 mb-3">Subject</p>
                <input
                  className="border rounded-lg p-2 w-full"
                  type="text"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <p className="mt-5 mb-3">Your Message</p>
                <input
                  className="border rounded-lg p-2 w-full pb-20"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button className="bg-gray-500 text-white text-center rounded-lg p-2 w-full mt-5 hover:text-gray-500 hover:bg-gray-200 duration-300 transition-all ease-in-out">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
