    import React from "react";
    import Work1 from "./Images/work1.png";
    import Mail from "./Images/mail.png"
    import cook from "./Images/cook.png"
    import { useRef } from "react";
    import { motion,useScroll,useTransform } from "framer-motion";
    import { Link,Element } from "react-scroll";
    import { useMediaQuery } from "react-responsive";



    const Card = ({ text, image, Head }) => {
      return (
        <div className="p-10 w-[570px] h-auto flex flex-col items-center gap-8 justify-center bg-[#CACACA] bg-opacity-20 backdrop-blur-md relative z-10 rounded-xl">
          <Element name="Works" />
          <img src={image} className="w-[400px] h-[250px]" />
          <div className="flex flex-col items-center gap-2">
            <span className="font-poppins font-semibold text-[20px] ">{Head}</span>
            <p className="leading-loose font-poppins text-[13px] w-[450px] text-center">
              {text}
            </p>
          </div>
          
        </div>
      );
    };



    function Works() {
      const targetRef=useRef();

    const {scrollYProgress} = useScroll({
      target: targetRef,
    });

    const x = useTransform(scrollYProgress,[0,1],["10%","-90%"])

    const isSmall = useMediaQuery({query: '(max-width:768px)'});  
    
      return (
        <motion.section initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:2 }} ref={targetRef} className= "w-full h-auto relative">
          <div className="lg:w-[200px] md:w-[150px] lg:h-[200px] md:h-[150px] sm:h-[130px] sm:w-[130px] bg-[#C73C7F] -rotate-45 absolute top-16 shadow-inner-md " />
          <p className="font-poppins text-[70px] font-bold ml-20 tracking-widest relative z-10 top-24">
            My works
          </p>
          <section className="relative h-[400vh]">
            <div className=" overflow-hidden justify-start h-auto ml-16 mt-36 sticky top-28">
              <motion.div style={isSmall ? null : {x}} className="flex md:flex-row items-center gap-5 sm:flex-col">
              <Card
                image={Work1}
                Head="Fest-x"
                text="FESTX is an annual symposium hosted by the Department of Computer Science and Business Systems of Sri Sairam Engineering College to promote the spirit of Entrepreneurship and to explore the latest tech trends. FESTX'23 is a two day programme hosted by the Department of Computer Science and Business Systems which has 7 unique inter-collegiate events."
              />
              <Card
                image={Mail}
                Head="Mail"
                text="FESTX is an annual symposium hosted by the Department of Computer Science and Business Systems of Sri Sairam Engineering College to promote the spirit of Entrepreneurship and to explore the latest tech trends. FESTX'23 is a two day programme hosted by the Department of Computer Science and Business Systems which has 7 unique inter-collegiate events."
              />
              <Card
                image={cook}
                Head="Cook it easy"
                text="FESTX is an annual symposium hosted by the Department of Computer Science and Business Systems of Sri Sairam Engineering College to promote the spirit of Entrepreneurship and to explore the latest tech trends. FESTX'23 is a two day programme hosted by the Department of Computer Science and Business Systems which has 7 unique inter-collegiate events."
              />
              <Card
                image={Work1}
                Head="Fest-x"
                text="FESTX is an annual symposium hosted by the Department of Computer Science and Business Systems of Sri Sairam Engineering College to promote the spirit of Entrepreneurship and to explore the latest tech trends. FESTX'23 is a two day programme hosted by the Department of Computer Science and Business Systems which has 7 unique inter-collegiate events."
              />
              </motion.div>
            </div>
          </section>
        </motion.section>
      );
    }

    export default Works;
