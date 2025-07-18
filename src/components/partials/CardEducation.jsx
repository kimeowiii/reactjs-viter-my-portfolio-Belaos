import React from "react";

const CardEducation = ({ logo,alt, institution, course, date }) => {
  return (
    <>
      <div className="bg-slate-500 rounded-xl p-2 shadow-lg shadow-gray-200/20">
        <img src={logo} alt={alt} />
        <div className="flex justify-between">
          <h6 className="font-bold bg-gradient-to-r from-blue-950 to-gray-700 bg-clip-text text-transparent text-2xl ">
            {institution}
          </h6>
          <span className=" flex text-nowrap justify-center items-center rounded-full text-blue-950 bg-white drop-shadow-xl px-3 py-2 size-fit">
            {date}
          </span>
        </div>
        <p className="text-white mt-2 text-lg font-semibold">{course}</p>
      </div>
    </>
  );
};

export default CardEducation;
