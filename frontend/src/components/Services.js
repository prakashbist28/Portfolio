import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import reactimg from '../assets/reacticon.png'
import cppimg from '../assets/c++.png'
import mongoimg from '../assets/mongodb.png'
import expressimg from '../assets/expressjs.png'
import tailwindimg from '../assets/tailwind.png'
import nodeimg from '../assets/nodejs.png'
import cimg from '../assets/cimg.png'
import htmlimg from '../assets/html.png'


const Services = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] items-center flex-1 justify-center " id="services">
      <motion.div 
      variants={fadeIn('down',0.4)} 
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once:false, amount:0.7}}>
      <h1 className=" text-center font-primary text-pink-400 font-bold text-[24px] lg:text-[55px]  "> Familiar Technologies </h1>
      </motion.div>

      <motion.div 
      variants={fadeIn('up',0.4)} 
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once:false, amount:0.3}}
      className="pt-16 flex flex-wrap justify-center items-center mx-auto">
        <div className="pt-8 sm:w-1/4 ">
        <a href="https://react.dev/" alt="reacttut" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={reactimg} alt="react" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://nodejs.org/en" alt="node" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={nodeimg} alt="node" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://expressjs.com/" alt="exp" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={expressimg} alt="express" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://www.mongodb.com/" alt="yt" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={mongoimg} alt="mongo" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://www.tailwindcss.cn/" alt="tail" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={tailwindimg} alt="tailwind" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://html.com/" alt="html" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={htmlimg} alt="html" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://www.cprogramming.com/" alt="c" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[90px] lg:w-[150px] hover:scale-110 " src={cimg} alt="c" />
        </a>
        </div>

        <div className="pt-8 sm:w-1/4 ">
        <a href="https://cplusplus.com/doc/tutorial/" alt="cpp" target='_blank'>
          <img className="mx-auto pl-5  h-auto w-[100px] lg:w-[150px] hover:scale-110 " src={cppimg} alt="cpp" />
        </a>
        </div>

      </motion.div>
    
    </section>
  );
};
export default Services;
