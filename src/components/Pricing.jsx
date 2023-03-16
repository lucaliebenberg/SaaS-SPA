import React from "react";

import Pricing1 from "../assets/pricing1.png";
import Pricing2 from "../assets/pricing2.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const Pricing = () => {
  return (
    <div id="pricing" className="h-auto w-full bg-[#56AC8B]">
      <div>
        <h1 className="text-[40px] font-bold text-center pt-8 text-white">
          Simple pricing
        </h1>
        <p className="text-[18px] font-light text-center pt-3 text-white">
          Choose the package that aligns with your business needs
        </p>
      </div>
      <div className="flex flex-col w-[70vw] md:flex-row justify-around ml-auto mr-auto pt-[3rem] pb-8 lg:align-middle">
        <div className="hover:scale-105">
          <img
            src={Pricing2}
            alt="Pricing option 1"
            className="h-auto w-auto hover:cursor-pointer hover:scale-105"
            data-aos="fade-right"
          />
        </div>
        <div className="hover:scale-105">
          <img
            src={Pricing1}
            alt="Pricing option 2"
            className="h-auto w-auto mt-5 hover:cursor-pointer hover:scale-105"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
