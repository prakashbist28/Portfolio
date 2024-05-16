import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'
import Img0 from '../assets/proj0.png'

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
            <h1 className='h2 leading-tight font-primary text-[35px] lg:text-[50px] text-gradient font-extrabold '>
              My Project <br />
              works
            </h1>
            <p className=' mb-12 font-semibold text-[10px] lg:text-[20px]'>
              My main focus is to build web applications using MERN stack <br/>The following are the projects/web-apps that i built using MERN stack
            </p>
          </motion.div>

          {/* proj0 */}
          <motion.div
          variants={fadeIn('left',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount:0.3}}>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
            <div className='group-hover:bg-purple-900/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img0} alt='img' />
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-48 group-hover:bottom-36 transition-all duration-300 z-50'>
                <span className='text-[10px] md:text-[15px] lg:text-[20px] text-white font-tertiary font-bold'>Ecommerce</span>
              </div>
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-20 transition-all duration-500 z-50'>
                <span className='text-[8px] md:text-[12px] lg:text-[16px] text-white font-semibold'>Ecommerce website is a fully responsive website which lets users to create an account and shop products.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/Ecommercemern' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://ecommercemern-pb.vercel.app/' target='_blank'> Website </a>
              </div>
            </div>
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
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-48 group-hover:bottom-36 transition-all duration-300 z-50'>
                <span className='text-[10px] md:text-[15px] lg:text-[20px] text-white font-tertiary font-bold'>Tasker</span>
              </div>
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-20 transition-all duration-500 z-50'>
                <span className='text-[8px] md:text-[12px] lg:text-[16px] text-white font-semibold'>Tasker is a mern stack application where one can add, update, delete and mark tasks as complete.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/tasker' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://tasker-fmr5.onrender.com/' target='_blank'> Website </a>
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
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-48 group-hover:bottom-36 transition-all duration-300 z-50'>
                <span className='text-[10px] md:text-[15px] lg:text-[20px] text-white font-tertiary font-bold'>CHATTER</span>
              </div>
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span className='text-[8px] md:text-[12px] lg:text-[16px] text-white font-semibold'>Chatter is a chat application where users can register,login and send messages to each other. It is implemented with help of MERN along with socket.io</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/Chatter' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://chatter-pb.onrender.com' target='_blank'> Website </a>
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
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-48 group-hover:bottom-44 transition-all duration-300 z-50'>
                <span className='text-white md:text-[15px]  font-tertiary font-bold text-[10px] lg:text-[20px] leading-tight'>MOVIE NERD</span>
              </div>
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span className=' text-white  font-semibold text-[8px] md:text-[12px] lg:text-[16px] overflow-hidden'>Movienerd is a website that gives user information about current airing,trending movies/series around the world. I made use of TMDb api to implement this project. To learn more about project you can visit github link below</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/MovieNerd' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://movienerd-front.onrender.com/' target='_blank'> Website </a>
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
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-48 group-hover:bottom-36 transition-all duration-300 z-50'>
                <span className='text-[10px] md:text-[15px] lg:text-[20px] text-white font-tertiary font-bold'>PORTFOLIO</span>
              </div>
              <div className='absolute -bottom-full left-12 lg:group-hover:bottom-32 group-hover:bottom-20 transition-all duration-500 z-50'>
                <span className=' text-[8px] md:text-[12px] lg:text-[16px] text-white font-semibold ' >I built personal portfolio website using reactjs, nodejs and emailjs.<br/> I used Emailjs so that one can contact me through contact form.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://github.com/prakashbist28/Portfolio' target='_blank'> Github </a>
              </div>
              <div className='absolute -bottom-full left-40 group-hover:bottom-4 lg:group-hover:bottom-12 transition-all duration-700 z-50'>
              <a className='text-[8px] p-1 lg:text-[12px] font-tertiary border-2 border-violet-400 bg-black lg:border-r-8 lg:border-b-8 border-r-4 border-b-4 lg:p-3 hover:border-2 hover:bg-violet-800/70  hover:border-l-black hover:border-t-black/70 hover:border-l-4 hover:border-t-4 lg:hover:border-l-8 lg:hover:border-t-8 hover:border-b-1' href='https://prakashbist.onrender.com' target='_blank'> Website </a>
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
