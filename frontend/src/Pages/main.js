import React from 'react';
// components
import Banner from '../components/Banner';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import Tech from '../components/tech';
import Project from '../components/Projects';
import { BiArrowToTop } from 'react-icons/bi';

const Main = () => {



  return (
    <div className=''>
      
      <Banner />
      <Nav />
      <div className='h-[100px]'></div>
      {/* <About /> */}
      <div className='md:h-[100px] h-[300px]'></div>
      <Tech />
      <div className='h-[250px]'></div>
      <Project />
      <div className='h-[200px]'></div>
      <Contact />
      <div className='h-[300px]'></div>
 
      
    </div>
  );
};

export default Main;