import React from "react";
import { Techimgs } from "../Data/Techimgs";
import {  motion } from "framer-motion";
import { fadeIn } from "../variants";


const Tech = () => {


  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] items-center flex-1 justify-center m-10 md:m-20 lg:m-40 "
      id="tech"
    >
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className=" text-center font-fifth text-teal-400 font-bold text-[35px] lg:text-[50px]  ">
          {" "}
          Tech Stack{" "}
        </h1>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pt-4 md:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
      >
        {Techimgs.map((item) => {
          const Icon = item.icon;
          return(
          <div key={item.id} className=" group border hover:bg-teal-900/30 transition duration-300 hover:scale-105 rounded-lg p-4 ">
            <div className="flex md:flex-col items-center justify-between px-6 md:px-0">
              <a href={item.link} target="_blank" rel="none">
              <Icon className="text-4xl text-teal-400" />  
              </a>
              <div className="flex flex-col items-end md:items-center">
              <h1 className=" text-[8px] md:text-[12px] lg:text-[16px] font-fifth  font-semibold justify-center hover:text-teal-300 hover:font-medium  hover:scale-110 transition-all duration-1000">{item.title}</h1>       
              <h1 className=" text-[8px] md:text-[12px] lg:text-[16px] font-quad font-light lowercase justify-center overflow-hidden">{item.description}</h1>    
              </div>
              </div>
            </div>
        )}
        )}
      </motion.div>
    </section>
  );
};
export default Tech;
