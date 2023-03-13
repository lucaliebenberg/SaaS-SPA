import React from "react";

import Product2 from "../assets/product2.png";

const WhyUs = () => {
  return (
    <div className="w-full h-[90vh] bg-[#56AC8B]">
      <div className="p-[5rem]">
        <h1 className="text-[40px] font-bold text-white">Why Us</h1>
        <p className="max-w-[1141px] text-[23px] text-[#FDFDFD] pt-[3rem]">
          Onesheet is an intuitive online accounting software that provides
          users with an easy way to track financial information, manage
          expenses, and generate detailed reports with expert AI analytics.
          Modern accounting software is powered by AI, giving businesses the
          ability to streamline their finances and gain valuable insights from
          their financial data, utilising predictive analytics, natural language
          processing and being highly configurable.
        </p>
      </div>
      <div className="flex justify-center align-middle ml-auto mr-auto pt-[5rem]">
        <img src={Product2} alt="Onesheet product 2" className="" />
      </div>
    </div>
  );
};

export default WhyUs;
