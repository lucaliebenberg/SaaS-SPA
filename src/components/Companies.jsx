import React from "react";

import Company1 from "../assets/company1.png";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.png";
import Company5 from "../assets/company5.png";

const Companies = () => {
  return (
    <div className="sm:h-[90vh] md:h-[80vh] w-full h-[100vh] bg-white flex flex-col justify-center">
      <h1 className="sm:text-[28px] md:text-[32px] text-[#8C8C8C] text-[40px] font-bold text-center ml-auto pt-[3rem] mt-10 mr-auto">
        Partners with leading companies worldwide
      </h1>
      <div className="sm:flex-wrap flex flex-row justify-between align-middle w-[95vw] m-auto">
        <img
          src={Company1}
          alt="Slack logo"
          className="sm:mb-12 md:h-[40px] md:mb-12 h-[40px]"
        />
        <img src={Company2} alt="Envato logo" className="h-[40px] w-auto" />
        <img src={Company3} alt="USA Today logo" className="h-[40px] w-auto" />
        <img src={Company4} alt="Forbes logo" className="h-[40px] w-auto" />
        <img src={Company5} alt="GeekWire logo" className="h-[40px] w-auto" />
      </div>
    </div>
  );
};

export default Companies;
