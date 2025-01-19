import React from "react";
import union from "./Images/Union.svg";
import { Element, Link } from "react-scroll";

function Hire() {
  return (
    <section className="mt-24 relative flex justify-center h-[100vh]">
      <Element name="Hire" />
      <text className="font-poppins font-semibold text-[100px] bg-clip-text bg-gradient-to-r  from-[#4287f5] to-[#C73C7F] mt-7 text-transparent">
        Hire me
      </text>
      <div className="absolute bottom-40 h-auto w-auto">
        <div className="absolute right-28 top-12 text-center">
          <h1 className="text-[35px] font-semibold">Email</h1>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqSvdHJQLJVCxKBbfmnBjvmmnznSDPsVTjtxrJxrXJVmxQjHDHgLCRLkPbqFKLGvWCjdwL"
            className="text-[25px] italic font-light font-poppins text-[#323232] hover:tracking-widest transition-all duration-500"
          >
            vishwanathk807@gmail.com
          </a>
        </div>
        <div className="absolute left-48 bottom-20 text-center">
          <h1 className="text-[35px] font-semibold">Phone</h1>
          <a
            className="text-[25px] italic font-light font-poppins text-[#323232] hover:tracking-widest transition-all duration-500"
          >
            8946018858
          </a>
        </div>

        <img src={union} />
      </div>
    </section>
  );
}

export default Hire;
