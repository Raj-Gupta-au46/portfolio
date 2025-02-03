"use client";

import React, { useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex ">
          <Image src="/Me.png" height={300} width={300} alt="Raj Gupta" />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1 transition hover:scale-110 ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Raj Gupta!
        </div>
        <br />
        <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Chill
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Software Engineer with a focus on Backend development,
          dedicated to crafting elegant and user-friendly web and mobile
          applications.
        </p>

        <div className="text-md flex justify-center relative">
          {/* Button */}
          <button
            onClick={() => window.open("mailto:raj.gupta07082000@gmail.com")}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent relative"
          >
            Contact Me
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-12 bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-lg">
              📧 raj.gupta07082000@gmail.com <br /> 📞 9506854730
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
