import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import Onesheet from "../assets/onesheetLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] bg-[#56AC8B]">
      <div className="max-w-[1240px] mx-auto px-2 flex justify-between items-center h-full">
        <motion.div
          initial={{ x: "-200px" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[var(--primary-blue)]">
            <img
              src={Onesheet}
              alt="Onesheet Logo"
              className="w-[210px] hover:cursor-pointer"
            />
          </h1>
        </motion.div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <motion.a
              href="#features"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105">
                Features
              </li>
            </motion.a>
            <motion.a
              href="#whyus"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105">
                Why Us
              </li>
            </motion.a>
            <motion.a
              href="#pricing"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105">
                Pricing
              </li>
            </motion.a>
            <motion.a
              href="#companies"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105">
                Companies
              </li>
            </motion.a>
            <motion.a
              href="#footer"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105">
                Contact
              </li>
            </motion.a>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          initial={{ y: "-200px" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="block md:hidden"
          onClick={handleNav}
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-[95vw] rounded-md bg-white text-[#56AC8B] absolute top-[50px] left-0 flex justify-center text-center ml-3 mt-2 md:hidden lg:hidden xl:hidden"
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
