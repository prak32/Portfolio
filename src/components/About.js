import React from 'react';
import image from '../prakash.jpg';
import { useState, useEffect } from 'react';

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define a function to determine the image size based on the screen width and height
  const getImageSize = () => {
    if (width < 700 && height >= 444) {
      return 'w-32 h-32'; // Align image in column below the texts
    } else if (width >= 1024) {
      return 'w-48 h-48'; // Large screens
    } else if (width >= 700) {
      return 'w-36 h-36'; // Medium screens
    } else {
      return 'w-28 h-28'; // Small screens
    }
  };

  return (
    <div className='flex justify-center'>
      {width>700 ? (
        <div className='flex items-center h-[70vh] w-[76vw] justify-between'>
          <div className='flex flex-col mt-12 md:gap-1 md:mt-16'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600'>Hi👋,</h1>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600'>My name is</h1>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600 font-bold bg-gradient-to-r from-sky-400 via-blue-600 to-purple-950 inline-block text-transparent bg-clip-text'>Prakash Shrestha</h1>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600 font-bold text-gray-600'>I build things for web</h1>
          </div>
          <div className='flex mt-11'>
            <a href='https://www.instagram.com/prakstha/'>
              <img 
                style={{ boxShadow:'0px 0px 3px 3px rgba(50, 0, 195, 0.8), 0px 0px 3px 3px rgba(100, 191, 255, 0.6), 0px 0px 3px 3px rgba(128, 0, 128, 0.6)'}} 
                src={image} 
                alt='prakash' 
                className={`rounded-full ${getImageSize()}`} // Dynamically apply image size based on screen width and height
              />
            </a>
          </div>
        </div>
      ) : (
        <div className='flex justify-center border border-red-900'>
        <div className='flex flex-col h-[56vh] w-[76vw]'> 
          <div className='flex flex-col mt-12'>
        
            <h1 className='text-3xl  font-bold text-gray-600'>Hi👋,</h1>
            <h1 className='text-3xl  font-bold text-gray-600'>My name is</h1>
            <h1 className='text-3xl  font-bold text-gray-600 font-bold bg-gradient-to-r from-sky-400 via-blue-600 to-purple-950 inline-block text-transparent bg-clip-text'>Prakash Shrestha</h1>
            <h1 className='text-3xl  font-bold text-gray-600 font-bold text-gray-600'>I build things for web</h1>
          </div>
          <div>
            <div className='flex h-[30vh] mt-10 md:pl-6 md:mt-16 md:h-[44vh]'>
              <a href='https://www.instagram.com/prakstha/'>
                <img 
                  style={{ boxShadow:'0px 0px 3px 3px rgba(50, 0, 195, 0.8), 0px 0px 3px 3px rgba(100, 191, 255, 0.6), 0px 0px 3px 3px rgba(128, 0, 128, 0.6)'}} 
                  src={image} 
                  alt='prakash' 
                  className={`rounded-full ${getImageSize()}`} // Dynamically apply image size based on screen width and height
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
