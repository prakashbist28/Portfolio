import React from "react";
import Image from "../assets/bannerimg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation} from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {

  const handleClick = ()=> {
    const moveto = document.getElementById('Contact');
    moveto.scrollIntoView({behavior:"smooth"})
  }
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex md:flex-row flex-col-reverse">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}} 
            className="text-[40px] font-bold leading-[0.8] lg:text-[110px]">
              PRAKASH<span className="mx-2">BIST</span>
            </motion.h1>

            <motion.div 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}}  
            className="mb-6 text-[22px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] ">
              <TypeAnimation
                sequence={[
                  "fullstack development",
                  2000,
                  "Web Development",
                  2000,
                  "frontend development",
                  2000,
                  
                ]}
                speed={50}
                className="text-teal-400"
                wrapper="span"
                repeat={Infinity}
                
              />
            </motion.div>

            <motion.p 
            variants={fadeIn('up',0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}}
            className="mb-8 max-w-lg mx-auto lg:mx-0 text-[14px] lg:text-[20px] ">Hello there, Thank you for visiting my website <br/>
            To know more about me you can scroll down</motion.p>

            <motion.div
            variants={fadeIn('up',0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <div className=" relative ">
                <div className=" absolute bg-teal-300 blur-md rounded-full inset-0"></div>
              <button className="btn btn-lg relative" onClick={handleClick}>Contact Me</button>
              </div>

              <a href="https://drive.google.com/file/d/1qxHRCPX8IvdN-bNGqsU7TDaiPEa_43g0/view?usp=sharing" className="text-gradient btn-link" target='_blank'>
                {" "}
                My Resume{" "}
              </a>
            </motion.div>

            <motion.div
            variants={fadeIn('up',0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}}  
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a href="https://github.com/prakashbist28" target='_blank'>
                <FaGithub className=" text-[40px] hover:text-teal-300 hover:scale-125 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/prakashbist28/ " target='_blank'>
                <FaLinkedin className=" text-[40px] hover:text-teal-300 hover:scale-125 transition duration-300"/>
              </a>
            </motion.div>
          </div>
          

          <div>
          <motion.div
          variants={fadeIn('down',0.3)} 
          initial="hidden" 
          whileInView={'show'}   
          className="flex flex-1 mb-10 md:mb-0 mx-auto max-w-[300px] lg:max-w-[500px]">
            <img className=" hover:scale-110 object-contain rounded-full duration-500 hover:shadow-teal-400 hover:shadow-lg "  src={Image} alt="image" />
          </motion.div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Banner;
