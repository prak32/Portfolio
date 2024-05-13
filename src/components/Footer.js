import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
  <div className='flex justify-center'>
  
      <div className='flex h-[14vh] w-[76vw] mb-4 justify-end gap-8'>
        <div>
        <p className='text-gray-600 text-md underline underline-offset-1'>+977 9818656023</p>
        </div>
        <div>
        <a href='https://mail.google.com/'><p className='text-gray-600 text-md'>praaakash21@gmail.com</p></a>
        </div>
        <div className='flex justify-between gap-5 p-1 text-xl'>
        <a href='https://github.com/prak32'><FaGithub></FaGithub></a>  
        <a href='https://www.facebook.com/profile.php?id=100022254796671'><FaFacebook/></a>
        <a href='https://www.linkedin.com/in/prakash-shrestha-334402182/'><FaLinkedin/></a>
        </div>
    
        </div>
        </div> 
    </div>
          )
}

export default Footer
