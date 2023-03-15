import React from "react";
import Product1 from "../assets/product1.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-[92vh] bg-[#56AC8B]">
      <div className="w-full h-full flex flex-row justify-between align-middle pt-[6rem] lg:pt-[10rem]">
        <div className="flex flex-col pl-[3.3rem] lg:pl-[6rem] lg:pt-8">
          <h1 className="text-[38px] max-w-[220px] lg:max-w-[508px] text-white font-bold text-left leading-tight mb-8 lg:text-[52px]">
            We help you to grow your business to the next level
          </h1>
          <div className="flex flex-row">
            <button className="w-[115px] h-[41px] rounded-[5px] bg-[#56AC8B] mr-3 border-white border-2 text-white  lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer">
              Learn More
            </button>
            <button className="w-[115px] h-[41px] rounded-[5px] bg-white text-[#56AC8B] lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="sm: hidden md:hidden lg:inline-flex ml-[5rem] ">
          <img src={Product1} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
