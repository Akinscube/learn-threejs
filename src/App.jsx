import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Navbar, Tech, Experience, Feedbacks, Hero, Works, StarsCanvas} from './components'
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from './utils/use-follow-pointer';

const App = () => {

  const cursorDot = document.querySelector("[data-cursor-dot]")
  const cursorOutline = document.querySelector("[data-cursor-outline]")
  
  window.addEventListener('mousemove', function(e) {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    // cursorOutline.style.left = `${posX}px`
    // cursorOutline.style.top = `${posY}px` 

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 900, fill: "forwards"})

  })

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <BrowserRouter>
    
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>

    {/* <motion.div
      ref={ref}
      className="cursor-outline"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 7,
        stiffness: 100,
        restDelta: 0.001
      }}
    /> */}
    </BrowserRouter>
  );
};

export default App;
