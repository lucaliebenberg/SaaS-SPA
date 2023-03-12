import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Onesheet from "../assets/onesheetLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[80px] bg-[#56AC8B]">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[var(--primary-blue)]">
            <img src={Onesheet} alt="Onesheet Logo" className="w-[210px]" />
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li className="m-5">Features</li>
            <li className="m-5">Why Us</li>
            <li className="m-5">Pricing</li>
            <li className="m-5">Companies</li>
            <li className="m-5">Contact</li>
            {/* <button className="ml-4">Start free trial</button> */}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="block md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-[#56AC8B] text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">Features</li>
            <li className="text-2xl">Why Us</li>
            <li className="text-2xl">Pricing</li>
            <li className="text-2xl">Companies</li>
            <li className="text-2xl">Contact</li>
            {/* <button className="m-8">Start free trial</button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
