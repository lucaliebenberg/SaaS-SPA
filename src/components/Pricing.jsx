import React from "react";

import Pricing1 from "../assets/pricing1.png";
import Pricing2 from "../assets/pricing2.png";

const Pricing = () => {
  return (
    <div className="w-full h-[100vh] bg-[#56AC8B]">
      <div>
        <h1 className="text-[40px] font-bold text-center pt-3">
          Simple pricing
        </h1>
        <p className="text-[24px] font-light text-center pt-3">
          Choose the package that aligns with your business needs
        </p>
      </div>
      <div className="w-[70vw] flex flex-row justify-around align-middle ml-auto mr-auto pt-4">
        <img
          src={Pricing2}
          alt="Pricing option 1"
          className="h-[520px] w-auto"
        />
        <img
          src={Pricing1}
          alt="Pricing option 2"
          className="h-[520px] w-auto"
        />
      </div>
    </div>
  );
};

export default Pricing;
