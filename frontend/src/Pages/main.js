import React from 'react';
// components
import Banner from '../components/Banner';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Contact from '../components/Contact';
import Tech from '../components/tech';
import Project from '../components/Projects';

const Main = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <div className='md:h-[100px] h-[300px]'></div>
      <Tech />
      <div className='h-[250px]'></div>
      <Project />
      <div className='h-[100px]'></div>
      <Contact />
      
    </div>
  );
};

export default Main;