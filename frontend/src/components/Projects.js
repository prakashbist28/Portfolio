import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Works } from '../Data/Works';
const Project = () => { 



  return (
  <section className='min-h-[100vh] lg:min-h-[90vh] flex items-center' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>

          <motion.div
          variants={fadeIn('right',0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.3}}>
            <h1 className='h2 leading-tight font-primary text-[35px] lg:text-[50px] text-gradient font-extrabold '>
              My Projects 
            </h1>
            <p className=' mb-12 font-semibold text-[10px] lg:text-[20px]'>
              My main focus is to build web applications using MERN stack <br/>The following are the projects/web-apps that I built using MERN stack
            </p>
          </motion.div>
          
            {Works.map((item)=>(
                <motion.div
                variants={fadeIn('up',0.5)} 
                initial="hidden" 
                whileInView={'show'} 
                viewport={{once:false, amount:0.3}}>
                  
            <div key={item.id} className='group relative overflow-hidden border-2 leading-tight border-white/50 rounded-xl '>
            <div className='group-hover:bg-purple-900/70 w-full h-full absolute z-40 transition-all  duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={item.img} alt='img' />
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-48 group-hover:bottom-36 transition-all duration-300 z-50'>
                <span className='text-[10px] md:text-[15px] lg:text-[20px] text-white font-tertiary font-bold hidden md:flex flex-1'>{item.title}</span>
              </div>
              <div className='absolute -bottom-full leading-tight left-12 lg:group-hover:bottom-32 group-hover:bottom-20 transition-all duration-500 z-50'>
                <span className='text-[8px]  md:text-[12px] lg:text-[16px] text-white font-semibold'>{item.desc}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href={item.git} target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href={item.web} target='_blank'> Website </a>
              </div>
            </div>
            </motion.div>
        ))}
          

        </div>
      </div>
    </div>
  </section>
  )
};

export default Project;
