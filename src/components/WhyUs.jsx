import React from "react";

import Product2 from "../assets/product2.png";

const WhyUs = () => {
  return (
    <div className="sm:h-[80vh] md:h-[85vh] w-full h-[100vh] bg-[#56AC8B] overflow-clip">
      <div className="p-[5rem]">
        <h1 className="text-[40px] font-bold text-white">Why Us</h1>
        <p className="sm:text-[18px] md:text-[20px] max-w-[1141px] text-[23px] text-[#FDFDFD] pt-[3rem] font-light">
          Onesheet is an intuitive online accounting software that provides
          users with an easy way to track financial information, manage
          expenses, and generate detailed reports with expert AI analytics.
          Modern accounting software is powered by AI, giving businesses the
          ability to streamline their finances and gain valuable insights from
          their financial data, utilising predictive analytics, natural language
          processing and being highly configurable.
        </p>
      </div>
      <div className="md:mt-[1rem] flex justify-center align-middle ml-auto mr-auto pt-[2rem]">
        <img src={Product2} alt="Onesheet product 2" />
      </div>
    </div>
  );
};

export default WhyUs;
