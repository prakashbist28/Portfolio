import React from "react";
import { Techimgs } from "../Data/Techimgs";
import {  motion } from "framer-motion";
import { fadeIn } from "../variants";


const Tech = () => {


  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] items-center flex-1 justify-center "
      id="tech"
    >
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className=" text-center font-primary text-teal-400 font-bold text-[24px] lg:text-[55px]  ">
          {" "}
          Technologies{" "}
        </h1>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pt-16 flex flex-wrap  justify-center items-center mx-auto"
      >
        {Techimgs.map((item) => (
          <div key={item.id} className=" group pt-8 w-1/3 md:w-1/4 ">
            <div className=" flex flex-col items-center ">
              <a href={item.link} target="_blank" rel="none">
                  <img
                    className="mx-auto h-auto w-[70px]  lg:w-[150px] transition duration-500 rounded-full hover:scale-110 hover:shadow-xl hover:shadow-teal-300"
                    src={item.name}
                    alt={`Tech image ${item.id}`}
                  />

                 <h1 className="flex text-[8px] md:text-[12px] lg:text-[20px] pt-4 font-medium justify-center hover:text-teal-300 hover:font-medium  hover:scale-110 transition-all duration-1000">{item.title}</h1>       
              </a>
              </div>
            </div>
        ))}
      </motion.div>
    </section>
  );
};
export default Tech;
