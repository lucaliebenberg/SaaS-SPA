import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-white">
      <div className="flex flex-col justify-center mt-[5rem]">
        <p className="text-[#909090] font-semibold text-[12px] text-center">
          LIKE WHAT YOU SEE?
        </p>
        <h1 className="text-[#55AA8A] font-semibold text-[28px] text-center">
          Let's work together
        </h1>
        <p className="max-w-[384px] text-black text-center justify-center text-[16px] mt-2 ml-auto mr-auto">
          If you’re looking for a kick-ass software company, we’re here to help!
        </p>
        <button className="w-[134px] h-[40px] rounded-[5px] bg-[#55AA8A] text-white mt-5 ml-auto mr-auto hover:scale-105">
          Get in touch
        </button>
      </div>
      <div className="w-[90vw] border-stone-900"></div>
      <div className="flex flex-row justify-between align-middle pt-[6rem] pb-8 text-[#CCC]">
        <p className="text-[12px] pt-1 ml-10">
          &copy; Onesheet 2022. All rights reserved
        </p>
        <div className="flex flex-row mr-8">
          <a
            href="https://www.facebook.com"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer"
          >
            <AiFillFacebook size={24} className="mr-3" />
          </a>
          <a
            href="https://www.twitter.com"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer"
          >
            <AiFillTwitterSquare size={24} className="mr-3" />
          </a>
          <a
            href="https://www.instagram.com"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer"
          >
            <AiFillInstagram size={24} className="mr-3" />
          </a>
          <a
            href="https://www.linkedin.com"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#55AA8A] hover:scale-105 hover:cursor-pointer"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
