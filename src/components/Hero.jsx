import React from "react";

import Product1 from "../assets/product1.png";

const Hero = () => {
  return (
    <div className="w-full h-[92vh] bg-[#56AC8B]">
      <div className="w-full h-full flex flex-row justify-between align-middle pt-[6rem] lg:pt-[10rem]">
        <div className="flex flex-col pl-[4rem] lg:pl-[6rem] lg:pt-8">
          <h1 className="text-[38px] max-w-[220px] text-white font-bold text-left leading-tight mb-8 lg:text-[52px]">
            We help you to grow your business to the next level
          </h1>
          <div className="flex flex-row">
            <button className="w-[115px] h-[41px] rounded-[5px] bg-white text-[#56AC8B] mr-3 lg:w-[141px] lg:h-[50px] ">
              Get Started
            </button>
            <button className="w-[115px] h-41px] rounded-[5px] bg-[#56AC8B] border-white border-2 text-white ">
              Learn More
            </button>
          </div>
        </div>
        <div className="sm: hidden md:hidden ml-[5rem] ">
          <img src={Product1} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
