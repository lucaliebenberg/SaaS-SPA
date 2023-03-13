import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-white">
      <div className="flex flex-col align-middle justify-center">
        <p className="text-[#909090] font-semibold text-[12px] text-center">
          LIKE WHAT YOU SEE?
        </p>
        <h1 className="text-[#55AA8A] font-semibold text-[28px] text-center">
          Let's work together
        </h1>
        <p className="max-w-[384px] text-black text-center text-[16px]">
          If you’re looking for a kick-ass software company, we’re here to help!
        </p>
        <button className="w-[134px] h-[40px] rounded-[5px] bg-[#55AA8A] text-white">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Footer;
