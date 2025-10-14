

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import aboutimg from "../assets/about.png";
import { FiExternalLink } from "react-icons/fi";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleClick = () => {
    const Contact = document.getElementById("Contact");
    Contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section  " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className=" flex gap-y-11 lg:flex-row flex-col lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 h-[640px] lg:h-[640px] mix-blend-lighten bg-top"
          >
            <img
              className=" "
              src={aboutimg}
              alt="alt"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h2 className="h2 font-secondary text-[50px] font-bold text-teal-400 hover:text-gray-300 transition duration-500">
              About me
            </h2>
            <h3 className="h3 mb-7 flex flex-col font-secondary leading-tight text-[17px] lg:text-[22px]">
              {" "}
              My name is Prakash Bist, <span>I am a recent computer science graduate.</span>{" "}
            </h3>
            <p className="mb-6 font-secondary text-[15px] lg:text-[18px] ">
              My career objective is to leverage my skills and knowledge to the
              create innovative and user-friendly web applications. I am
              passionate about crafting engaging user experiences and staying up
              to date with the latest web technologies and trends. My goal is to
              work in a collaborative environment where I can contribute my
              expertise in front-end and back-end development to build scalable
              web solutions.
            </p>

            <div className="flex mb-8">
              <div>
                <div className="text-[40px] text-gradient mb-2 mt-2 font-extrabold">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Built
                </div>
              </div>
            </div>
            <div className="flex  gap-x-8 items-center mb-12 mx-auto lg:mx-0">
                         
            <button className="border rounded-full px-3 hover:px-6 py-1 hover:bg-gradient-to-tr from-teal-600 duration-300" onClick={handleClick}>Contact Me</button>
             

             <a href="https://drive.google.com/file/d/1osDwEoXxbcxMqTmd9VenEWH0pT9smeq2/view?usp=sharing" 
             className="border flex items-center gap-2 rounded-full px-3 hover:px-6 py-1 hover:bg-gradient-to-tr from-teal-600 hover: duration-300" target='_blank'>
               {" "}
               My Resume{" "} <FiExternalLink />
             </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
