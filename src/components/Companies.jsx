import React from "react";

// import logos
import Company1 from "../assets/company1.png";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.png";
import Company5 from "../assets/company5.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const Companies = () => {
  return (
    <div
      id="companies"
      className="h-auto w-full bg-white flex flex-col justify-center pb-[3rem]"
      data-aos="fade-left"
    >
      <h1 className="text-[#8C8C8C] text-[25px] font-bold text-center ml-auto pt-[3rem] mt-10 mb-[6rem] mr-auto">
        Partners with leading companies worldwide
      </h1>
      <div className="flex flex-col justify-center align-middle w-auto ml-auto mr-auto lg:flex-row lg:justify-between">
        <img
          src={Company1}
          alt="Slack logo"
          className="h-[40px] w-[150px] mb-[5rem] lg:mr-14 object-contain"
        />
        <img
          src={Company2}
          alt="Envato logo"
          className="h-[40px] w-[150px] mb-[5rem] lg:mr-14 object-contain"
        />
        <img
          src={Company3}
          alt="USA Today logo"
          className="h-[40px] w-[150px] mb-[5rem] lg:mr-14 object-contain"
        />
        <img
          src={Company4}
          alt="Forbes logo"
          className="h-[40px] w-[150px] mb-[5rem] lg:mr-14 object-contain"
        />
        <img
          src={Company5}
          alt="GeekWire logo"
          className="h-[40px] w-[150px] mb-[5rem] lg:mr-14 object-contain"
        />
      </div>
    </div>
  );
};

export default Companies;
