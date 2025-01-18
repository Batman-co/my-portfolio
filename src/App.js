import './App.css';
import Navbar from "./Nav"
import Hero from "./Hero"
import About from "./About"
import {motion,useScroll,useSpring} from "framer-motion"
import Works from "./Works"
import { Link, Element } from 'react-scroll';
import Hire from "./Hire"
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';


function App() {
  
  const isSmallest = useMediaQuery({query: '(max-width:600px)'});
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress)
  return (
    
    <BrowserRouter>
      {isSmallest ? <h1 className='text-center text-[30px] mt-52'>View in a Larger screen please 😊</h1> : <div className='w-[100vw] h-[815vh] bg-[#fafafa] pt-20'>
        <motion.div style={{scaleX}} transition={{duration:5,ease:"easeInOut"}} className='h-4 bg-[#393b3e] fixed top-0 left-0 right-0 z-20 origin-left transition-all ' />  
        
      <Navbar /> 
      <Hero></Hero>
      <About></About>
      <Works />
      <Hire />

    </div>}
      
    </BrowserRouter>
    
  );
}

export default App;
