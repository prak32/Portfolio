import React from 'react'
import About from './About'
import TechStack from './TechStack'
import Projects from './Projects'
import Footer from './Footer';
const AllComponents = () => {
  return (
    <div>
       <div className='flex flex-col bg-gray-100 gap-40 md:gap-40'>
      <About/>
      <TechStack/>
      <Projects/>
      <Footer/>
    </div>
    </div>
  )
}

export default AllComponents                          
