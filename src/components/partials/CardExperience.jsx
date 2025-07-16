import React from "react";

const CardExperience = ({ institution, hours, course }) => {
  return (
    <>
      {/* card experience */}
      <div className="bg-slate-500 rounded-xl p-2">
        <div className="flex justify-between">
          <h6 className="bg-gradient-to-r from-blue-950 to-gray-700 bg-clip-text text-transparent text-2xl ">
            {institution}
          </h6>
          <span className=" flex text-nowrap justify-center items-center rounded-full text-blue-950 bg-white px-3 py-2 size-fit">
            {hours}
          </span>
        </div>
        <p className="text-white">{course}</p>
      </div>
    </>
  );
};

export default CardExperience;
