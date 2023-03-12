import React from "react";

import Product1 from "../assets/product1.png";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-[#56AC8B]">
      <div className="w-full h-full flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-[52px] max-w-[508px] text-white font-bold text-left">
            We help you to grow your business to the next level
          </h1>
          <div className="flex flex-row">
            <button className="w-[141px] h-[50px] rounded-[5px] bg-white text-[#56AC8B]">
              Get Started
            </button>
            <button className="w-[141px] h-[50px] rounded-[5px] bg-[#56AC8B] border-white border-2 text-white">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src={Product1} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
