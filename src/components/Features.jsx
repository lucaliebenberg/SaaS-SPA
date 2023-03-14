import React from "react";

import Feature1 from "../assets/Icon.png";
import Feature2 from "../assets/Icon-1.png";
import Feature3 from "../assets/Icon-2.png";

const Features = () => {
  return (
    <div className="h-auto w-full lg:h-[100vh]">
      <h1 className="text-[#8C8C8C] text-center font-bold text-[30px] p-[5rem] lg:text-[40px] lg:text-left">
        Our Features
      </h1>

      <div className="flex flex-col p-[5rem] h-full md:flex-row md:justify-between lg:mt-auto lg:mb-auto">
        <div className="flex flex-col mr-2 mt-14">
          <img
            src={Feature1}
            alt="Feature 1 icon"
            className="h-[40px] w-[40px] ml-auto mr-auto mb-5"
          />
          <h2 className="text-[20px] md:text-[22px] text-[#56AC8B] font-bold lg:text-[28px] justify-center text-center mb-4">
            Simple Accounting
          </h2>
          <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
            Manage expenses, and generate detailed reports with a few clicks
          </p>
        </div>

        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature2}
              alt="Feature 2 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-5"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#56AC8B] font-bold lg:text-[28px] justify-center text-center mb-4">
              Powerful Features
            </h2>
            <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
              Financial Tracking, Expense Management and Ai Automation
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature3}
              alt="Feature 3 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-5"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#56AC8B] font-bold lg:text-[28px] justify-center text-center mb-4">
              Expert AI Analytics
            </h2>
            <p className="text-[13px] md:text-[14px] lg:text-[18px] text-[#ABABAB] justify-center text-center max-w-[260px]">
              Ability to streamline finances and gain valuable insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
