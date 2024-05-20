// Projects.js
import React from 'react';
import Card from '../components/Card';
import { useState, useEffect } from "react";

const ObjectData = [
  {
    imgsrc: "https://github.com/prak32/Images/blob/master/SCEV_project.png?raw=true",
    title: "College Event Voting system",
    description: "The College Event Voting project is an innovative system designed to improve the voting procedures for college events' security and integrity.",
    languages: "Tech stack: HTML , JavaScript, CSS, Python"
  },
  {
    imgsrc:"https://raw.githubusercontent.com/prak32/Images/master/Modern_Periodic.png",
    title: "Modern Periodic Table",
    description: "This is another sample project description. Random things are here in description. This is another sample project using lorem ipsum generator for dummy content.",
    languages: "Tech stack: HTML , CSS, JavaScript"
  },
  {
    imgsrc:"https://github.com/prak32/Images/blob/master/SCEV_project.png?raw=true",
    title: "College Event Voting system",
    description: "This is another sample project description. Random things are here in description. This is another sample project using lorem ipsum generator for dummy content.",
    languages: "Tech stack: HTML , CSS, JavaScript"
  },
  {
    imgsrc:"https://raw.githubusercontent.com/prak32/Images/master/Modern_Periodic.png",
    title: "Modern Periodic Table",
    description: "This is another sample project description. Random things are here in description. This is another sample project using lorem ipsum generator for dummy content.",
    languages: "Tech stack: HTML , CSS, JavaScript"
  },
  {
    imgsrc:"https://github.com/prak32/Images/blob/master/SCEV_project.png?raw=true",
    title: "College Event Voting system",
    description: "This is another sample project description. Random things are here in description. This is another sample project using lorem ipsum generator for dummy content.",
    languages: "Tech stack: HTML , CSS, JavaScript"
  },
  {
    imgsrc:"https://raw.githubusercontent.com/prak32/Images/master/Modern_Periodic.png",
    title: "Modern Periodic Table",
    description: "This is another sample project description. Random things are here in description. This is another sample project using lorem ipsum generator for dummy content.",
    languages: "Tech stack: HTML , CSS, JavaScript"
  }
  // Add more projects as needed
];
const Projects = ({ data }) => {
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
      <div className='flex justify-center '>
      {width>700 ? (
        <div className='flex flex-col md:gap-1 lg:gap-3 mt-56 md:mt-28 lg:mt-32 w-[76vw] mb-6'>
          <div className='flex justify-center '>
            <p className='font-bold text-gray-700 text-3xl md:text-4xl lg:text-5xl '>Projects</p>
          </div>
          <div className='flex justify-center p-2'>
            <p className='text-gray-600 font-semibold text-lg md:text-xl lg:text-2xl '>Things I’ve built so far</p>
          </div>
        </div> 
      ):(
        <div className='flex flex-col w-[76vw] mt-20 gap-2'>
          <div className='flex justify-center '>
            <p className='font-bold text-gray-700 text-xl'>Projects</p>
          </div>
          <div className='flex justify-center'>
            <p className='text-gray-600 font-semibold text-sm'>Things I’ve built so far</p>
          </div>
        </div> 
      )
}
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 lg:gap-16'>
            {ObjectData.map((item) => (
              <Card
                imgsrc={item.imgsrc}
                title={item.title}
                description={item.description}
                languages={item.languages}
              />
            ))}
    
        </div>
      </div>
    </div>
  );
};

export default Projects;
