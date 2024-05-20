import React from 'react';
import image from '../prakash.jpg';
import { useState, useEffect } from 'react';

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define a function to determine the image size based on the screen width and height

  return (
    <div className='flex justify-center'>
      {width>700 ? (
        <div className='flex items-center h-[70vh] w-[76vw] justify-between'>
          <div className='flex flex-col mt-48 md:gap-1 md:mt-36'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600'>Hi👋,</h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600'>My name is</h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 font-bold bg-gradient-to-r from-sky-400 via-blue-600 to-purple-950 inline-block text-transparent bg-clip-text'>Prakash Shrestha</h1>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 font-bold text-gray-600'>I build things for web</h1>
          </div>
          <div className='flex mt-48 md:mt-32'>
            <a href='https://www.instagram.com/prakstha/'>
              <img 
                style={{ boxShadow:'0px 0px 3px 3px rgba(50, 0, 195, 0.8), 0px 0px 3px 3px rgba(100, 191, 255, 0.6), 0px 0px 3px 3px rgba(128, 0, 128, 0.6)'}} 
                src={image} 
                alt='prakash' 
                className="h-36 w-36 md:h-48 md:w-48 rounded-full" 
              />
            </a>
          </div>
        </div>
      ) : (
        <div className='flex mt-32'>
        <div className='flex flex-col h-[56vh] w-[74vw]'> 
        <div className="flex justify-center">
          <div className='flex flex-col mt-2'>
            <h1 className='text-xl  font-bold text-gray-600'>Hi👋,</h1>
            <h1 className='text-xl  font-bold text-gray-600'>My name is</h1>
            <h1 className='text-xl  font-bold text-gray-600 font-bold bg-gradient-to-r from-sky-400 via-blue-600 to-purple-950 inline-block text-transparent bg-clip-text'>Prakash Shrestha</h1>
            <h1 className='text-xl  font-bold text-gray-600 font-bold text-gray-600'>I build things for web</h1>
          </div>
          </div>
          
            <div className='flex h-[30vh] mt-10 md:pl-6 md:mt-16 md:h-[44vh] flex justify-center'>
              <a href='https://www.instagram.com/prakstha/'>
                <img 
                  style={{ boxShadow:'0px 0px 3px 3px rgba(50, 0, 195, 0.8), 0px 0px 3px 3px rgba(100, 191, 255, 0.6), 0px 0px 3px 3px rgba(128, 0, 128, 0.6)'}} 
                  src={image} 
                  alt='prakash' 
                  className="h-28 w-28 rounded-full"
                />
              </a>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default About;