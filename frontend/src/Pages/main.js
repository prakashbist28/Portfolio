import React from 'react';
// components
import Banner from '../components/Banner';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Contact from '../components/Contact';

const Main = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <div className='h-[250px]'></div>
      <Services />
      <div className='h-[100px]'></div>
      <Work />
      <div className='h-[50px]'></div>
      <Contact />
      <div className='h-[150px]'></div>
    </div>
  );
};

export default Main;