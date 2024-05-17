import React, { useState } from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className='flex justify-center'>
      <div className='flex justify-end mt-6 w-[76vw]'>
        <div className="flex">
          <div className='flex flex-col md:flex-row gap-4 md:gap-12 lg:flex-row justify-end w-[76vw]'>
            <div className='gap-1'>
            <div className="py-2 visible md:invisible">
              <SideBar toggleNavVisibility={toggleNavVisibility} navVisible={navVisible} />
            </div>
            <div className={`flex  gap-2 flex-col ${navVisible ? 'invisible font-semibold md:flex-row md:visible md:text-lg md:gap-8 lg:flex-row lg:text-xl lg:gap-12' : ' text-sm font-semibold md:flex-row md:text-lg md:gap-8 lg:flex-row lg:text-xl lg:gap-12'} text-gray-500`}>
              <Link to="/About">About</Link>
              <Link to="/TechStack">TechStack</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Footer">Contact</Link>
            </div>
            </div>
            <div className={`flex gap-4 ${navVisible ? 'invisible md:flex-row md:visible md:gap-4 md:text-lg md:py-11 lg:flex-row lg:gap-5 lg:text-xl lg:justify-end lg:py-11' : 'md:flex-row md:text-xl md:gap-4 md:py-11 lg:flex-row lg:gap-5 lg:justify-end lg:py-11'}`}>
              <a href='https://github.com/prak32'><FaGithub /></a>
              <a href='https://www.facebook.com/profile.php?id=100022254796671'><FaFacebook /></a>
              <a href='https://www.Linkedin.com/in/prakash-shrestha-334402182/'><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
