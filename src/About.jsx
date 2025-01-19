import React from "react";
import Ellips from "./Images/Ellipse 2.svg"
import {motion} from "framer-motion"
import Des from "./Images/data an.svg"
import webflow from "./Images/webflow.svg"
import { Link, Element } from "react-scroll";


function About({text}){
    

    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.2}} transition={{duration:1}} className="relative h-auto w-auto mb-[150px]">
            <Element name="About" />
            <span  className="font-poppins md:text-[70px] sm:text-[50px] font-bold md:ml-20 sm:ml-16 tracking-widest relative z-10 top-10">About me</span>

            <img src={Ellips} className="relative bottom-28 lg:mb-[-140px] md:mb-[-130px] sm:mb-[-125px] sm:mt-7 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] "/>
            <div className="bg-[#e4e4e4] lg:w-[1116px] lg:h-[408px] md:w-[900px] md:h-[338px] sm:w-[500px] sm:h-[548px] m-auto relative inset-0 bg-opacity-70 sm:pt-5 backdrop-blur-md rounded-xl top-24 flex md:flex-row sm:flex-col items-center justify-evenly sm:gap-5">
                <img src={Des} className="md:w-auto md:h-[250px] sm:w-auto sm:h-[250px]" />
                <p className="lg:w-[550px] md:w-[530px] md:h-[180px] sm:w-[400px] md:text-left sm:text-center sm:text-sm lg:leading-loose md:leading-relaxed font-poppins mb-8">As a UI/UX designer, I thrive on the challenge of blending creativity with functionality to create user-centric designs that leave a lasting impression. With a keen eye for detail and a dedication to understanding user behavior, I strive to craft intuitive interfaces that enhance the overall user experience. Whether it's wireframing, prototyping, or conducting user testing, I approach each project with enthusiasm and a commitment to excellence.</p>
            </div>
            <div className="bg-[#e4e4e4] lg:w-[1116px] lg:h-[408px] md:w-[900px] md:h-[338px] sm:w-[500px] sm:h-[548px] m-auto relative inset-0 bg-opacity-70 sm:pt-5 backdrop-blur-md rounded-xl top-24 flex md:flex-row sm:flex-col items-center justify-evenly sm:gap-5 mt-14">
                <img src={webflow} className="w-auto h-[250px]" />
                <p className="lg:w-[550px] md:w-[530px] h-[180px] sm:w-[400px] sm:h-[250px] md:text-left sm:text-center sm:text-sm lg:leading-loose md:leading-relaxed font-poppins mb-8">I excel in using React JS to create dynamic, responsive, and visually appealing web applications. My expertise enables me to translate complex design concepts into interactive user experiences, leveraging animations to bring interfaces to life. I utilize Tailwind CSS to ensure efficient styling and modern, scalable designs. I prioritize performance, accessibility, and SEO, ensuring each project is optimized and user-friendly. Through continuous learning, I stay updated with the latest React and Tailwind CSS features to deliver innovative, high-quality solutions tailored to each client's needs.</p>
            </div>
        </motion.div>
    )
}


export default About;