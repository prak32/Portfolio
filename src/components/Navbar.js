import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"; 
const Navbar = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex gap-10 justify-end m-6 w-[76vw]'>
    <div className="flex justify-between">
      <div className='flex gap-3'>
      <div className="flex space-x-8 text-gray-500">
        <Link to ="/About">About</Link>
        <Link to ="/TechStack">TechStack</Link>
        <Link to ="/Projects">Projects</Link>
        <Link to ="/Footer">Contact</Link>
      </div>
      <div className='flex justify-between gap-5 p-1'>
        <a href='https://github.com/prak32'><FaGithub></FaGithub></a>  
        <a href='https://www.facebook.com/profile.php?id=100022254796671'><FaFacebook/></a>
        <a href='https://www.Linkedin.com/in/prakash-shrestha-334402182/'><FaLinkedin/></a>
        </div>
        </div>
       </div>
        </div>
        </div>
  )
}

export default Navbar
