import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
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
    
  <div className='flex justify-center'>
  {width>700 ? (
      <div className='flex h-[10vh] w-[76vw] mt-56 md:mt-20 lg:mt-24 justify-end gap-8'>
        <div>
        <p className='text-gray-600 text:md md:text-lg lg:text-xl underline underline-offset-1'>+977 9818656023</p>
        </div>
        <div>
        <a href='https://mail.google.com/'><p className='text-gray-600 text:md md:text-lg lg:text-xl'>praaakash21@gmail.com</p></a>
        </div>
        <div className='flex justify-between gap-5 p-1 text:md md:text-lg lg:text-xl'>
        <a href='https://github.com/prak32'><FaGithub></FaGithub></a>  
        <a href='https://www.facebook.com/profile.php?id=100022254796671'><FaFacebook/></a>
        <a href='https://www.linkedin.com/in/prakash-shrestha-334402182/'><FaLinkedin/></a>
        </div>
        </div>
          ):(
            <div className='flex flex-col h-[14vh] w-[76vw] justify-end gap-3 mt-32'>
            <div>
            <p className='text-gray-600 text:md underline underline-offset-1'>+977 9818656023</p>
            </div>
            <div>
            <a href='https://mail.google.com/'><p className='text-gray-600 text:md'>praaakash21@gmail.com</p></a>
            </div>
            <div className='flex gap-4 text:md'>
            <a href='https://github.com/prak32'><FaGithub></FaGithub></a>  
            <a href='https://www.facebook.com/profile.php?id=100022254796671'><FaFacebook/></a>
            <a href='https://www.linkedin.com/in/prakash-shrestha-334402182/'><FaLinkedin/></a>
            </div>
            </div>
          )}
          </div>
  )
}

export default Footer
