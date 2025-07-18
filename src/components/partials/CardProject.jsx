import React from "react";

const CardProject = ({ img, alt, title, tools, description }) => {
  return (
    <>
      <div className="rounded-xl bg-white   shadow-2xl shadow-blue-300/50">
        <img
          className=" w-full rounded-xl object-cover"
          src={img}
          alt={alt}
        />
        <div className="px-3 py-4">
          <div className="flex justify-between">
            <h6 className="text-xl font-bold my-3 text-gray-600">
              {title}
            </h6>
            <span className="max-w-44 bg-gradient-to-r from-blue-950 to-gray-500 bg-clip-text text-transparent font-semibold px-2 rounded-xl flex leading-4 justify-center items-center ">
              <small>{tools}</small>
            </span>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <button className="text-blue-600 font-medium hover:text-blue-900 transition-all duration-300 ease-in-out">
            <a href="#">Read more...</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardProject;
