import React from "react";
import union from "./Images/Union.svg"
import { Element, Link } from "react-scroll";

function Hire(){
    return(
        <section className="mt-24 relative flex justify-center h-[100vh]">
            <Element name="Hire" />
            <span className="font-poppins font-semibold text-[100px] bg-clip-text bg-gradient-to-r  from-[#4287f5] to-[#C73C7F] mt-7 text-transparent">Hire me</span>
            <img src={union} className="absolute top-60"/>
        </section>
        
    )
}


export default Hire;