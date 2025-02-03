
"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {

   const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/newlogo.jpg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

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
            <div className="absolute top-full mt-2 bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-lg max-w-xs break-words">
              📧 raj.gupta07082000@gmail.com 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
