import React from 'react';
import berserk from '../boringassets/berserk.png';
import blossom from '../boringassets/blossom.png';
import bridge from '../boringassets/bridge.png';
import bwsamurai from '../boringassets/bwsamurai.png';
import cat from '../boringassets/cat.png';
import city from '../boringassets/city.png';
import cityblue from '../boringassets/cityblue.png';
import citygirl from '../boringassets/citygirlpunk.png';
import desert from '../boringassets/desert.png';
import docs from '../boringassets/docs.png';
import dragon from '../boringassets/dragon.png';
import guts from '../boringassets/guts.png';
import wild from '../boringassets/intowild.png';
import wood from '../boringassets/intowoods.png';
import mount from '../boringassets/notherenlights.png';
import death from '../boringassets/playofdeath.png';
import rsamurai from '../boringassets/redsamurai.png'
import skull from '../boringassets/skulll.png';
import wait from '../boringassets/waitingreflecton.png';
import whale from '../boringassets/whale.png';
import window from '../boringassets/windowdrops.png'
import wolves from '../boringassets/wolves.png';
import road from '../boringassets/road.png';
import sam from '../boringassets/samuraifirst.png';
import tornado from '../boringassets/tornado.png';
import vid from '../boringassets/cityvid.mp4'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

function Art() {
  return (
    <div className=' pt-8 '>
      <motion.h1
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='text-center font-secondary font-bold text-[20px] lg:text-[35px] text-purple-400'
      >NOT SO INTERESTING STUFF</motion.h1>

      <motion.h2
      variants={fadeIn('up',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='text-center font-quad pt-6 text-[12px] lg:text-[25px]'
      >Since you wandered this far why not check these out.</motion.h2>

      <motion.h2
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='text-center font-quad text-[12px] lg:text-[25px] pt-4'
      >I like doing some digital arts whenever I feel moody, these are digital arts that i made.</motion.h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mx-4 pt-10'>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}} >
          <img src={berserk} alt='Berserk' className='w-auto h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={bridge} alt='Bridge' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={bwsamurai} alt='BW Samurai' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={cat} alt='cat' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={city} alt='city' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={desert} alt='desert' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={docs} alt='docs' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={dragon} alt='dragon' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={guts} alt='guts' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={wood} alt='woods' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={mount} alt='mount' className='w-full h-auto hover:scale-125' />
        </motion.div>
        
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={death} alt='death' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={rsamurai} alt='rsamurai' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={wait} alt='wait' className='w-full h-auto hover:scale-125' />
        </motion.div>
        
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={whale} alt='whale' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={window} alt='window' className='w-full h-auto hover:scale-125' />
        </motion.div>
        
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={wolves} alt='wolves' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={road} alt='road' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={sam} alt='sam' className='w-full h-auto hover:scale-125' />
        </motion.div>
        
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={tornado} alt='tornado' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={skull} alt='skull' className='w-full h-auto hover:scale-125' />
        </motion.div>
        
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={wild} alt='wild' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={cityblue} alt='cityblue' className='w-full h-auto hover:scale-125' />
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
        <video src={vid} controls className='w-full  h-auto mb-4'></video>
        </motion.div>

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={citygirl} alt='citygirl' className='w-full h-auto hover:scale-125' />
        </motion.div> 

        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}>
          <img src={blossom} alt='Blossom' className='w-full h-auto hover:scale-125' />
        </motion.div>



      </div>
    </div>
  );
}

export default Art;