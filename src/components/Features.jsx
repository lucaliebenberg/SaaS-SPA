import React from "react";

import Feature1 from "../assets/Icon.png";
import Feature2 from "../assets/Icon-1.png";
import Feature3 from "../assets/Icon-2.png";

const Features = () => {
  return (
    <div className="w-full h-[90vh]">
      <h1 className="text-[#8C8C8C] font-bold text-[40px] p-[5rem]">
        Our Features
      </h1>

      <div className="flex flex-row justify-between  p-[5rem] h-full">
        <div className="flex flex-col">
          <img
            src={Feature1}
            alt="Feature 1 icon"
            className="h-[40px] w-[40px]"
          />
          <h2 className="text-[#56AC8B] font-bold text-[28px] justify-center text-center">
            Simple Accounting
          </h2>
          <p className="text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
            Manage expenses, and generate detailed reports with a few clicks.
          </p>
        </div>

        <div>
          <div className="flex flex-col">
            <img
              src={Feature2}
              alt="Feature 2 icon"
              className="h-[40px] w-[40px]"
            />
            <h2 className="text-[#56AC8B] font-bold text-[28px] justify-center text-center">
              Powerful Features
            </h2>
            <p className="text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
              Financial Tracking, Expense Management and Ai Automation
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <img
              src={Feature3}
              alt="Feature 3 icon"
              className="h-[40px] w-[40px]"
            />
            <h2 className="text-[#56AC8B] font-bold text-[28px] justify-center text-center">
              Expert AI Analytics
            </h2>
            <p className="text-[18px] text-[#ABABAB] justify-center text-center max-w-[277px]">
              Ability to streamline finances and gain valuable insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
