import React from 'react';
// components
import Banner from '../components/Banner';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Contact from '../components/Contact';
import Tech from '../components/tech';
import Project from '../components/Projects';
import { BiArrowToTop } from 'react-icons/bi';

const Main = () => {

  const handleClick = () =>{
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  return (
    <div className='bg-site bg-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <div className='h-[100px]'></div>
      <About />
      <div className='md:h-[100px] h-[300px]'></div>
      <Tech />
      <div className='h-[250px]'></div>
      <Project />
      <div className='h-[200px]'></div>
      <Contact />
      <div className='h-[300px]'></div>
      <button onClick={handleClick} className='w-14 h-14 md:w-20 md:h-20 z-50 border-2 border-teal-400 rounded-full flex items-center justify-center fixed bottom-28 right-10 md:bottom-10 md:right-10 bg-teal-500 hover:bg-teal-400/50 transition duration-500'>
          <BiArrowToTop className=' text-[35px]'/>
        </button>
      
    </div>
  );
};

export default Main;