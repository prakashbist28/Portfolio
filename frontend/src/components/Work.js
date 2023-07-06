import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'

const Work = () => {

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
            <h1 className='h2 leading-tight font-primary text-[45px] text-gradient font-extrabold '>
              My Project <br />
              works
            </h1>
            <p className=' mb-12 font-semibold'>
              My main focus is to build web applications using MERN stack <br/>The following are the projects/web-apps that i built using MERN stack
            </p>
          </motion.div>

          {/* proj1 */}
          <motion.div
          variants={fadeIn('left',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.3}}>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
            <div className='group-hover:bg-purple-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img1} alt='img' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-300 z-50'>
                <span className='text-white font-tertiary font-bold'>WEB DEVELOPMENT</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50'>
                <span className='twxt-3xl text-white font-semibold'>Project title 4</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70 hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28' target='_blank'> Website </a>
              </div>
            </div>
          </motion.div>

          {/* proj2 */}
          <motion.div
          variants={fadeIn('right',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.3}}>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
            <div className='group-hover:bg-purple-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img2} alt='img' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-300 z-50'>
                <span className='text-white font-tertiary font-bold'>CHATTER</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50'>
                <span className='twxt-3xl text-white font-semibold'>Chatter is a chat application where users can register,login and send messages to each other. It is implemented with help of MERN along with socket.io</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/Chatter' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28' target='_blank'> Website </a>
              </div>
            </div>
          </motion.div>

          {/* proj3 */}
          <motion.div
          variants={fadeIn('left',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.3}}>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
            <div className='group-hover:bg-purple-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img3} alt='img' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-300 z-50'>
                <span className='text-white  font-tertiary font-bold '>MOVIE NERD</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50'>
                <span className='twxt-3xl text-white font-semibold'>Movienerd is a website that gives user information about current airing,trending movies/series around the world. I made use of TMDb api to implement this project. To learn more about project you can visit github link below</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/MovieNerd' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://movienerd-front.onrender.com/' target='_blank'> Website </a>
              </div>
            </div>
          </motion.div>

          {/* proj4 */}
          <motion.div
          variants={fadeIn('right',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.3}}>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
            <div className='group-hover:bg-purple-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img4} alt='img' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-300 z-50'>
                <span className='text-white font-tertiary font-bold'>PORTFOLIO</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50'>
                <span className='twxt-3xl text-white font-semibold'>I built personal portfolio website using reactjs, nodejs and emailjs. I use Emailjs so that one can contact me through contact form. You can check source code below.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='font-tertiary border-2 border-violet-400 bg-black border-r-8 border-b-8 p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-8 hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28' target='_blank'> Website </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
  )
};

export default Work;
