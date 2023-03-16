import React, { useEffect } from "react";
import Product1 from "../assets/product1.png";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, 20, 0],
      transition: { duration: 7, repeat: Infinity },
    });
  }, []);

  return (
    <motion.div id="hero" className="w-full h-[92vh] bg-[#56AC8B]">
      <div className="w-full h-full flex flex-row justify-between align-middle pt-[6rem] lg:pt-[10rem]">
        <motion.div className="flex flex-col pl-[3.3rem] lg:pl-[6rem] lg:pt-8">
          <motion.h1
            initial={{ x: "-200px" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-[38px] max-w-[220px] lg:max-w-[508px] text-white font-bold text-left leading-tight mb-8 lg:text-[52px]"
          >
            We help you to grow your business to the next level
          </motion.h1>
          <div className="flex flex-row">
            <motion.button
              initial={{ x: "-200px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[115px] h-[41px] rounded-[5px] bg-[#56AC8B] mr-3 border-white border-2 text-white  lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:scale-105"
            >
              <a href="#features">Learn More</a>
            </motion.button>
            <motion.button
              initial={{ x: "-200px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[115px] h-[41px] rounded-[5px] bg-white text-[#56AC8B] lg:w-[141px] lg:h-[50px] hover:scale-105 hover:cursor-pointer lg:hover:cursor-pointer lg:hover:scale-105"
            >
              <a href="#pricing">Get Started</a>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "500px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="sm: hidden md:hidden lg:inline-flex ml-[5rem] "
        >
          <motion.img
            animate={controls}
            src={Product1}
            alt="Onesheet Product"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
