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
const Routing = () => {
  return ( 
    <div>
    <Router>
        <Navbar/>
        <Routes>
            <Route path = '/' element={<AllComponents/>}></Route>
            <Route path = '/About' element={<About/>}> </Route>
            <Route path = '/TechStack' element={<TechStack/>}></Route>
            <Route path = '/Projects' element={<Projects/>}></Route>
            <Route path = '/Footer' element={<Footer/>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default Routing
