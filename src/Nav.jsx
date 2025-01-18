import React from "react";
import { Link, Element } from "react-scroll";
import { NavLink } from "react-router-dom";
import { delay } from "framer-motion";

function Navbar() {
  return (
    
      <div className="md:w-[900px] h-[66px] sm:w-[500px] bg-[#C73C7F] bg-opacity-75 m-auto rounded-lg flex justify-around md:gap-20  shadow-[0px_2px_30px_rgba(199,60,127,0.4)] sticky top-10 z-20 backdrop-blur-lg ">
        <button className="font-poppins hover:text-[#ffffff] transition-all">
          <Link to="Hero" smooth={true}>
            Home
          </Link>
        </button>
        <button className="font-poppins hover:text-[#ffffff] transition-all ">
          <Link to="About" smooth={true}>
            About me
          </Link>
        </button>
        <button className="font-poppins hover:text-[#ffffff] transition-all ">
          <Link to="Works" smooth={true}>
            My works
          </Link>
        </button>
        <button className="font-poppins hover:text-[#ffffff] transition-all ">
          <Link to="Hire" smooth={true}>
            Hire me
          </Link>
        </button>
      </div>
    
  );
}

export default Navbar;
