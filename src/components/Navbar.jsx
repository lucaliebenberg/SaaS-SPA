import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Onesheet from "../assets/onesheetLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] bg-[#56AC8B]">
      <div className="max-w-[1240px] mx-auto px-2 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[var(--primary-blue)]">
            <img
              src={Onesheet}
              alt="Onesheet Logo"
              className="w-[210px] hover:cursor-pointer"
            />
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <a href="#features">
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D]">
                Features
              </li>
            </a>
            <a href="#whyus">
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D]">
                Why Us
              </li>
            </a>
            <a href="#pricing">
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D]">
                Pricing
              </li>
            </a>
            <a href="#companies">
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D]">
                Companies
              </li>
            </a>
            <a href="#footer">
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D]">
                Contact
              </li>
            </a>
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
              ? "w-[95vw] rounded-md bg-white text-[#56AC8B] absolute top-[50px] left-0 flex justify-center text-center ml-3 mt-2"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <a href="#features">
              <li className="text-2xl pt-10 hover:cursor-pointer hover:text-[#00FF9D]">
                Features
              </li>
            </a>

            <a href="#whyus">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D]">
                Why Us
              </li>
            </a>
            <a href="#pricing">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D]">
                Pricing
              </li>
            </a>
            <a href="#companies">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D]">
                Companies
              </li>
            </a>
            <a href="#footer">
              <li className="text-2xl pt-5 pb-10 hover:cursor-pointer hover:text-[#00FF9D]">
                Contact
              </li>
            </a>
            {/* <button className="m-8">Start free trial</button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
