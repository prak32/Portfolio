import React from 'react'
import About from './About'
import TechStack from './TechStack'
import Projects from './Projects'
import Footer from './Footer';
import { useState, useEffect } from "react";

const AllComponents = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log("width herna lai", width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
    { width >700 ? (
    <div>
       <div className='flex flex-col bg-gray-100 gap-20 md:gap-12 lg:gap-32'>
      <div className='flex flex-col bg-gray-100 md:gap-12 lg:gap-32'>  
      <About/>
      <div className='flex flex-col bg-gray-100'>
      <TechStack/>
      </div>
      </div>
      <Projects/>
      <Footer/>
      </div>
      </div>
    ):(
      <div className='flex flex-col gap-2'>
      <About/>
      <TechStack/>
      <Projects/>
      <Footer/>
      </div>

    )}
    </div>
  )
}

export default AllComponents                          
