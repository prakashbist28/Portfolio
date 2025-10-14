import React, { useState } from "react";
import { Artimgs } from "../Data/Artimgs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { CiImageOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function DigArt() {
  return (
    <div className="pt-8">
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center font-seven font-bold text-[20px] lg:text-[35px] text-teal-300"
      >
        Random Pixels Of Imagination
      </motion.h1>

      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center tracking-tighter font-seven pt-6 text-[12px] lg:text-[25px]"
      >
        When logic takes a break, creativity takes over.<br/>
        Here are some of my digital art pieces born out of mood and curiosity.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-8 mx-4 pt-10">
        {Artimgs.map((item) => (
          <ImageWithPlaceholder key={item.id} imgSrc={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function ImageWithPlaceholder({ imgSrc, title }) {
  const [loaded, setLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="relative w-full h-auto group overflow-hidden rounded-lg">
          {!loaded && (
            <div className="absolute flex items-center justify-center inset-0 bg-gray-800 opacity-50 animate-pulse rounded-lg">
              <CiImageOn size={28} />
            </div>
          )}

          <img
            loading="lazy"
            src={imgSrc}
            alt={title}
            className={`w-full  h-auto duration-300 rounded-lg ${
              loaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-105`}
            onLoad={() => setLoaded(true)}
          />

<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>


          {/* Full View Button on Hover */}
          <button
            onClick={() => setOpenModal(true)}
            className="absolute font-primary bottom-2 right-2 opacity-0 group-hover:opacity-100 transition bg-black/70 px-3 py-1 rounded-md text-xs text-white hover:bg-teal-500"
          >
            Full View
          </button>
        </div>
        <h1 className="text-[12px] font-primary md:text-[18px] pt-6 flex justify-center">{title}</h1>
      </motion.div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
          <div className="relative max-w-[90%] max-h-[85%]">
            <img src={imgSrc} alt={title} className="rounded-lg max-h-[85vh] mx-auto" />
            <button
              onClick={() => setOpenModal(false)}
              className="absolute -top-8 right-0 text-white text-3xl hover:text-teal-300"
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DigArt;
