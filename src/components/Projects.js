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
        <div className='flex flex-col h-[14vh] w-[76vw] mb-6'>
          <div className='flex justify-center '>
            <p className='font-bold text-4xl text-gray-700'>Projects</p>
          </div>
          <div className='flex justify-center p-2'>
            <p className='text-gray-600 text-xl font-semibold'>Things I’ve built so far</p>
          </div>
        </div> 
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-wrap justify-between h-[134vh] w-[76vw]'>
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
