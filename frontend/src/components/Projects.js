import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Works } from "../Data/Works";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

const Project = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section
      className="min-h-[100vh] lg:min-h-[90vh] mt-40 flex items-center"
      id="work"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <h1 className="mb-2 font-fifth text-[35px] lg:text-[50px] text-teal-400 hover:text-teal-500 transition duration-500 font-extrabold">
            Projects
          </h1>
          <p className=" font-fifth mt-4 md:mt-8 font-semibold text-[10px] lg:text-[20px]">
            Worked with above mentioned technologies to build these web
            applications
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Works.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="border-2 border-white/30 rounded-xl flex flex-col gap-6 overflow-hidden  shadow-lg shadow-teal-500/10"
            >
              {/* Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover"
                />
              </div>

              {/* title */}
              <p className="text-white/90 font-bold flex items-center tracking-widest justify-center text-[14px] md:text-[18px] px-6  font-fifth">
                {item.title}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 ">
                <a
                  href={item.git}
                  target="_blank"
                  className="flex items-center gap-2 font-fifth text-xs md:text-sm px-4 hover:px-6 transition-all duration-300 py-2 border-[2px] rounded-full border-teal-400 bg-black text-white hover:bg-teal-700 "
                >
                  GitHub <FaGithub />
                </a>
                <a
                  href={item.web}
                  target="_blank"
                  className="flex items-center gap-2 font-fifth text-xs md:text-sm px-4 hover:px-6 transition-all duration-300 py-2 border-2 rounded-full border-teal-400 bg-black text-white hover:bg-teal-700 "
                >
                  Website <FiExternalLink />
                </a>
              </div>

              {/* Description */}
              <p className="text-white/90  flex items-center justify-center text-[12px] md:text-[16px] px-6  font-fifth tracking-tight">
                {item.desc}
              </p>

              {/* Tech Stack */}
              <div className="px-6  flex flex-wrap gap-2">
                {item.tech.map((tech, index) => (
                  <span
                    key={index}
                    className=" px-3 py-0 font-fifth tracking-tighter text-[10px] md:text-[12px]  rounded-full bg-teal-900/50 text-teal-300 shadow-sm hover:bg-teal-700/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* More Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => toggleMore(item.id)}
                  className="text-slate-100 font-fifth tracking-wider underline text-xs  hover:text-teal-300 flex items-center gap-2"
                >
                  {expanded === item.id ? (
                    <>
                      <span>Hide Details</span> <FaAnglesUp />
                    </>
                  ) : (
                    <>
                      <span>More Details</span> <FaAnglesDown />
                    </>
                  )}
                </button>

                {/* Points Expand Section */}
                {expanded === item.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 font-fifth tracking-tight space-y-1 text-white/80 text-[12px] md:text-[14px]"
                  >
                    {item.points.map((point, index) => (
                      <li
                        key={index}
                        className='before:content-["•"] before:mr-2'
                      >
                        {point}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
