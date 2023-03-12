import React from "react";

import Product1 from "../assets/product1.png";

const Hero = () => {
  return (
    <div className="w-full h-[92vh] bg-[#56AC8B]">
      <div className="w-full h-full flex flex-row justify-between align-middle pt-[10rem]">
        <div className="flex flex-col pt-8 pl-[6rem]">
          <h1 className="text-[48px] max-w-[530px] text-white font-bold text-left leading-tight mb-8">
            We help you to grow your business to the next level
          </h1>
          <div className="flex flex-row">
            <button className="w-[141px] h-[50px] rounded-[5px] bg-white text-[#56AC8B] mr-3 ">
              Get Started
            </button>
            <button className="w-[141px] h-[50px] rounded-[5px] bg-[#56AC8B] border-white border-2 text-white ">
              Learn More
            </button>
          </div>
        </div>
        <div className="ml-[5rem] mt-[]">
          <img src={Product1} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
