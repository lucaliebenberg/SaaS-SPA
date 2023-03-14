import React from "react";

import Pricing1 from "../assets/pricing1.png";
import Pricing2 from "../assets/pricing2.png";

const Pricing = () => {
  return (
    <div className="sm:h-[90vh] w-full h-[101vh] bg-[#56AC8B]">
      <div>
        <h1 className="text-[40px] font-bold text-center pt-8 text-white">
          Simple pricing
        </h1>
        <p className="text-[18px] font-light text-center pt-3 text-white">
          Choose the package that aligns with your business needs
        </p>
      </div>
      <div className="sm:flex-wrap w-[70vw] flex flex-row justify-around align-middle ml-auto mr-auto pt-[3rem] pb-8">
        <img
          src={Pricing2}
          alt="Pricing option 1"
          className="h-[520px] w-auto hover:cursor-pointer hover:scale-105"
        />
        <img
          src={Pricing1}
          alt="Pricing option 2"
          className="h-[520px] w-auto hover:cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Pricing;
