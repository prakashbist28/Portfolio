import React, { useState } from 'react';
import { Artimgs } from '../Data/Artimgs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'


function DigArt() {

  return (
    <div className=' pt-8 '>
      <motion.h1
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='text-center font-secondary font-bold text-[20px] lg:text-[35px] text-teal-300'
      >NOT SO INTERESTING STUFF</motion.h1>

      <motion.h2
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='text-center font-quad pt-6 text-[12px] lg:text-[25px]'
      >Since you wandered this far why not check these out. <br/>I like doing some digital arts whenever I feel moody, these are digital arts that i made.</motion.h2>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-14 mt-8 mx-4 pt-10'>

        {Artimgs.map((item, index) => (
            <div key={item.id}> 
            <motion.div
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}} >
              <img src={item.img} alt={item.title} className='w-auto h-auto  hover:scale-110 transition duration-500 hover:shadow-lg rounded-lg hover:shadow-teal-300'/>
              <h1 className=' text-[12px] md:text-[18px] pt-6 flex justify-center'>{item.title}</h1>
            
            </motion.div>
            </div>
        ))}
        

      </div>

    </div>
  );
}

export default DigArt;