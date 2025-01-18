import React from "react";
import Vishwa from "./Images/Vishwa.png";
import Rectangle from "./Images/Rectangle 12.svg";
import {
  backInOut,
  easeInOut,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useRef } from "react";
import { Link, Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);

  const isSmall = useMediaQuery({query:'(max-width: 768px)'});

  return (
    <div id="hero" className="relative mb-[150px]">
      <Element name="Hero" />

      <motion.img
        src={Rectangle}
        ref={targetRef}
        style={isSmall ? null : { rotate, y }}
        transition={{ ease: "easeInOut" }}
        className="absolute lg:left-44 md:left-2 sm:top-[-30px] hover:skew-x-12 transition-all ease-in-out lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-24 sm:h-24 md:top-10 "
      />
      <motion.img
        src={Rectangle}
        animate={{ x: [0, 5, 0], y: [-15, 15, -15] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="md:w-40 md:h-40 sm:w-24 sm:h-24 absolute lg:right-36 lg:top-96 md:right-5 sm:right-5 sm:top-40 md:top-80 "
      />
      <div className="lg:w-[1027px] lg:h-[490px]  md:w-[900px]  md:h-[400px] sm:w-[700px] sm:h-[200px] bg-[#CACACA] m-auto mt-24 relative rounded-2xl bg-opacity-40 backdrop-blur-md flex justify-center overflow-hidden">
        <motion.div className="relative top-[80px] h-[60px] w-[480px] ">
          <motion.span className="font-poppins md:text-[40px] sm:text-[30px] font-semibold md:tracking-[25px] sm:tracking-[35px] text-[#333333] z-0">
            K Vishwanath
          </motion.span>
        </motion.div>
        <p className="font-poppins absolute md:text-[25px] sm:text-[20px] font-bold text-transparent bottom-32 md:tracking-[25px] sm:tracking-[20px] sm:left-40 md:left-64 bg-gradient-to-r from-[#4287f5] to-[#C73C7F] bg-clip-text">
          UI/UX designer
        </p>
        <motion.img
          animate={{ x: [0, 24, 0], y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          src={Vishwa}
          className="lg:w-[204px] lg:h-[401px] hidden absolute top-[110px] m-auto inset-0 lg:block"
        />
      </div>
    </div>
  );
}

export default Hero;
