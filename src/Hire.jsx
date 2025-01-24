import React from "react";
import union from "./Images/Union.svg";
import { Element, Link } from "react-scroll";
import { delay, motion } from "framer-motion";

function Hire() {
  return (
    <section className="mt-24 relative flex justify-center h-[100vh]">
      <Element name="Hire" />
      <text className="font-poppins font-semibold text-[100px] bg-clip-text bg-gradient-to-r  from-[#4287f5] to-[#C73C7F] mt-7 text-transparent">
        Hire me
      </text>

      <div className="absolute bottom-40 h-auto w-auto">
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="absolute right-28 h-auto w-auto overflow-hidden top-12 text-center"
        >
          <motion.div variants={{ initial: { y: 0 }, hovered: { y: -100 } }} transition={{ duration: 0.2 }}>
            <h1 className="text-[35px] font-semibold">Email</h1>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqSvdHJQLJVCxKBbfmnBjvmmnznSDPsVTjtxrJxrXJVmxQjHDHgLCRLkPbqFKLGvWCjdwL"
              className="text-[25px]  font-light font-poppins text-[#323232] transition-all duration-500"
            >
              vishwanathk807@gmail.com
            </a>
          </motion.div>
          <motion.div variants={{ initial: { y: 100 }, hovered: { y: -100 } }} transition={{ duration: 0.2 }} className="absolute ">
            <h1 className="text-[35px] font-semibold">Email</h1>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqSvdHJQLJVCxKBbfmnBjvmmnznSDPsVTjtxrJxrXJVmxQjHDHgLCRLkPbqFKLGvWCjdwL"
              className="text-[25px]  font-light font-poppins text-[#323232] transition-all duration-500"
            >
              vishwanathk807@gmail.com
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hovered"
          className="absolute text-center h-auto w-auto left-48 bottom-20 overflow-hidden"
        >
          <motion.div
            variants={{ initial: { y: 0 }, hovered: { y: -100 } }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-[35px] font-semibold">Phone</h1>
            <a className="text-[25px]  font-light font-poppins text-[#323232]   transition-all duration-500">
              8946018858
            </a>
          </motion.div>
          <motion.div
            variants={{ initial: { y: 100 }, hovered: { y: -100 } }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <h1 className="text-[35px] font-semibold">Phone</h1>
            <a className="text-[25px]  font-light font-poppins text-[#323232]  transition-all duration-500">
              8946018858
            </a>
          </motion.div>
        </motion.div>

        <img src={union} />
      </div>
    </section>
  );
}

export default Hire;
