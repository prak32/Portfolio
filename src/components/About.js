import React from 'react'
import image from '../prakash.jpg'
const About = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex h-[35vh] w-[76vw] justify-between'> 
    <div className='flex flex-col gap-1 mt-16'>
      <h1 className='text-5xl font-bold text-gray-600 '>Hi👋,</h1>
      <h1 className='text-5xl font-bold text-gray-600'>My name is</h1>
      <h1 className='text-5xl font-bold bg-gradient-to-r from-sky-400 via-blue-600 to-purple-950 inline-block text-transparent bg-clip-text'>Prakash Shrestha</h1>
      <h1 className='text-5xl font-bold text-gray-600'>I build things for web</h1>
    </div>
    <div className='flex h-[35vh] pl-6 mt-16'>
      <a href='https://www.instagram.com/prakstha/'><img style={{boxShadow:'0px 0px 3px 3px rgba(50, 0, 195, 0.8), 0px 0px 3px 3px rgba(100, 191, 255, 0.6), 0px 0px 3px 3px rgba(128, 0, 128, 0.6)'}} 
      src={image} alt='prakash' className="w-52 h-52 rounded-full"/></a>
    </div>
    </div>
    </div>
    
  )
} 

export default About
