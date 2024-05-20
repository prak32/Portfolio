import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from './About'
import TechStack from './TechStack'
import Projects from './Projects'
import Navbar from './Navbar';
import AllComponents from './AllComponents'
import Footer from "./Footer"
import {useState, useEffect } from 'react'

const Routing = () => {
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
      {width > 700?(
    <Router>
        <Navbar/>
        <div className='sm:mt-2 md:mt-6 md:pt-1 lg:mt-16 lg:pt-1'>
        <Routes>
            <Route path = '/' element={<AllComponents/>}></Route>
            <Route path = '/About' element={<About/>}> </Route>
            <Route path = '/TechStack' element={<TechStack/>}></Route>
            <Route path = '/Projects' element={<Projects/>}></Route>
            <Route path = '/Footer' element={<Footer/>}></Route>
        </Routes>
        </div>
    </Router>
      ):(
        <Router>
        <Navbar/>
        <div className='mt-36'>
        <Routes>
            <Route path = '/' element={<AllComponents/>}></Route>
            <Route path = '/About' element={<About/>}> </Route>
            <Route path = '/TechStack' element={<TechStack/>}></Route>
            <Route path = '/Projects' element={<Projects/>}></Route>
            <Route path = '/Footer' element={<Footer/>}></Route>
        </Routes>
        </div>
    </Router>
      )}
    </div>
  )
}

export default Routing
