// Projects.js
import React from 'react';
import Card from '../components/Card';
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
  return (
    <div>
      <div className='flex justify-center '>
        <div className='flex flex-col mt-12 h-[11vh] w-[76vw] md:h-[14vh] md:w-[76vw] mb-6 border border-red-900'>
          <div className='flex justify-center '>
            <p className='font-bold text-gray-700 text-1xl md:text-4xl lg:text-5xl '>Projects</p>
          </div>
          <div className='flex justify-center p-2'>
            <p className='text-gray-600 font-semibold text-sm md:text-xl lg:text-2xl '>Things I’ve built so far</p>
          </div>
        </div> 
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-wrap justify-between h-[134vh] w-[76vw] border border-green-800'>
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
