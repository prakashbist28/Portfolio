import React from "react";
import Image from "../assets/profilepic.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FiExternalLink, FiMessageSquare } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";


const Banner = () => {
  const handleClick = () => {
    const moveto = document.getElementById("Contact");
    moveto.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex mt-10 mb-10 items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-12">
          <div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-1 border-2 border-teal-500 hover:shadow-xl hover:shadow-teal-500/40 overflow-hidden group bg-teal-500 rounded-full  mb-10 md:mb-0 mx-auto max-w-[200px] md:max-w-[300px] lg:max-w-[500px]"
            >
              <img
                className=" group-hover:scale-110  md:blur-[5px] hover:blur-0  object-contain rounded-full duration-500 "
                src={Image}
                alt="image"
              />
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex md:flex-row flex-col-reverse"
          >
            <div className="flex-1 text-center font-fifth lg:text-left">
              <h1 className="text-[40px] text-teal-500 font-bold leading-[0.8] md:text-[60px] lg:text-[80px]">
                PRAKASH<span className="mx-2">BIST</span>
              </h1>

              <div className="mb-4 mt-4 text-[22px] lg:text-[40px] font-fifth font-semibold uppercase leading-[1] ">
                <TypeAnimation
                  sequence={["Software Developer", 500, "Full stack developer", 500]}
                  speed={20}
                  className=""
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>

              <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-[16px] lg:text-[20px] flex items-center justify-center lg:justify-start gap-2 text-teal-500 ">
                <IoLocationOutline />
                Hyderabad, India
              </p>

              <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-[14px] lg:text-[20px] ">
                I am skilled in building complete web applications, from backend
                to frontend.
                <br />
              </p>

              <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <button
                  className="border-2 border-teal-500  text-teal-500 hover:text-white flex items-center gap-2 rounded-full px-3 hover:px-6 py-1 hover:bg-gradient-to-tr from-teal-600 hover: duration-300"
                  onClick={handleClick}
                >
                  Contact Me <FiMessageSquare />
                </button>

                <a
                  href="https://drive.google.com/file/d/1osDwEoXxbcxMqTmd9VenEWH0pT9smeq2/view?usp=sharing"
                  className="border-2 border-teal-500  text-teal-500 hover:text-white flex items-center gap-2 rounded-full px-3 hover:px-6 py-1 hover:bg-gradient-to-tr from-teal-600 hover: duration-300"
                  target="_blank"
                >
                  {" "}
                  My Resume <FiExternalLink />
                </a>
              </div>

              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
                <a href="https://github.com/prakashbist28" target="_blank">
                  <FaGithub className=" text-[24px] md:text-[40px] hover:text-teal-300 hover:scale-125 transition duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prakashbist28/ "
                  target="_blank"
                >
                  <FaLinkedin className=" text-[24px] md:text-[40px] hover:text-teal-300 hover:scale-125 transition duration-300" />
                </a>
                <a
                  href="mailto:prakashcena540@gmail.com"
                  target="_blank"
                >
                  <FaEnvelope className=" scale-y-110 text-[24px] md:text-[40px] hover:text-teal-300 hover:scale-125 transition duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
