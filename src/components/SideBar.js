import React from 'react';
import { FaBars } from 'react-icons/fa';

const SideBar = ({ toggleNavVisibility, navVisible }) => {
  return (
    <div>
       <button onClick={toggleNavVisibility}><FaBars /></button>
    </div>
  );
};

export default SideBar;
