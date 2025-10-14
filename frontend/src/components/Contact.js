// import React, { useRef, useState,useEffect} from 'react';
// import {motion} from 'framer-motion'
// import { fadeIn } from '../variants';
// import emailjs from '@emailjs/browser';
// import axios from 'axios'

// const Contact = () => {

//   const form = useRef();
//   const [serviceid,setserviceid]=useState('');
//   const [templateid,settemplateid]=useState('');
//   const [userid,setuserid]=useState('');

//   useEffect(() => {
//     axios.get('https://prakashback.onrender.com/api/api-key')
//       .then(response => {
//         setserviceid(response.data.serviceid);
//         settemplateid(response.data.templateid);
//         setuserid(response.data.userid);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(`${serviceid}`, `${templateid}`, form.current, `${userid}`)
//       .then((result) => {
//           console.log(result.text);
//         alert('message sent')
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()

//   };

//   return (
//   <section className='min-h-[80vh] lg:min-h-[75vh] flex items-center ' id='Contact'>
//     <div className='container mx-auto items-center'>
//       <div className='flex flex-col lg:flex-row '>
//       <div>
//         <motion.div
//         variants={fadeIn('left',0.3)}
//         initial="hidden"
//         whileInView={'show'}
//         viewport={{once:false, amount:0.3}}
//         className='flex-1 flex justify-start items-center mr-10'>
//           <div>
//           <h3 className='uppercase text-gradient font-secondary mb-12 leading-none text-[45px] lg:text-[90px] '> Contact Me  </h3>
//           </div>
//         </motion.div>
//       </div>

//       <motion.form
//       variants={fadeIn('right',0.3)}
//       initial="hidden"
//       whileInView={'show'}
//       viewport={{once:false, amount:0.3}}
//       ref={form} onSubmit={sendEmail}
//       className='flex-1 border border-teal-300 rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-center font-tertiary hover:border-teal-400 hover:shadow-xl hover:shadow-teal-400  '>
//         <input name="user_name" className='bg-transparent border-b p-2 border-teal-300 py-3 outline-none w-full placeholder:text-blue focus:shadow-lg focus:shadow-teal-300/60 transition-all' type='text' placeholder='Your Name' />
//         <input name="user_email" className='bg-transparent border-b p-2 border-teal-300 py-3 outline-none w-full placeholder:text-blue focus:shadow-lg focus:shadow-teal-300/60 transition-all' type='email' placeholder='Your Email' />
//         <textarea name="message" className='bg-transparent border-b p-2 border-teal-300 py-3 outline-none w-full placeholder:text-blue focus:shadow-lg focus:shadow-teal-300/60 transition-all resize-none mb-12' placeholder='Your Message'></textarea>
//         <button type="submit" value="Send" className='btn btn-lg'>Send message</button>
//       </motion.form>

//       </div>
//     </div>
//   </section>
//   )
// };

// export default Contact;

import React, { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { MoonLoader } from "react-spinners";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_MAIL_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false);
      setSuccess(true);
      event.target.reset();
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      console.log("Error", data);
    }
  };

  return (
    <section className="" id="Contact">
      <div className="w-full min-h-screen mt-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-center p-6">
        <div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center mr-10"
          >
            <div>
              <h3 className="uppercase text-teal-400 font-bold font-fifth mb-12 leading-none text-[45px] lg:text-[90px] ">
                {" "}
                Contact Me{" "}
              </h3>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full border-2 shadow-[0_0_15px_0_rgba(79,209,249,0.5)] shadow-teal-900 border-teal-900 max-w-lg rounded-xl bg-black/80  p-8"
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-fifth font-bold mb-6 text-center text-teal-500">
            Get In Touch
          </h2>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-12 ">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-left font-fifth font-medium text-slate-100 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-sm md:text-lg font-fifth px-4 py-2 bg-transparent border-b-2 border-slate-400 text-slate-100 focus:outline-none focus:shadow-xl focus:border-teal-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-sm font-fifth font-medium text-slate-100 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-sm md:text-lg font-fifth px-4 py-2  border-b-2 border-slate-400 bg-transparent text-slate-100 focus:outline-none focus:shadow-xl focus:border-teal-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-fifth text-left text-sm font-fourth font-medium text-slate-100 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full text-sm md:text-lg font-fifth px-4 py-2 border-b-2 border-slate-400 bg-transparent text-slate-100 focus:outline-none focus:shadow-lg focus:shadow-teal-400/10 focus:border-teal-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative rounded-full w-full font-fifth py-2 px-4 overflow-hidden border border-black hover:border-teal-300  bg-gradient-to-l from-teal-300 via-teal-600 to-teal-950 text-white 
               font-semibold transition duration-300 group"
            >
              {/* Sliding bar */}

              <div className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-full"></div>

              <FaArrowRightLong className="absolute -left-20 top-0 h-full text-teal-500 transition-all duration-700 ease-out group-hover:left-[90%]" />

              {/* Text */}
              <span className="relative z-10 group-hover:text-teal-500">
                Send Message
              </span>
            </button>
          </form>

          {loading && (
            <div className="flex justify-center mt-4">
              <MoonLoader size={30} color="#1ec8c8" />
            </div>
          )}

          {success && (
            <h1 className="flex items-center justify-center gap-2 text-md mt-2 lg:text-lg text-teal-500 font-eight">
              form submitted successfully <MdCheckCircle />{" "}
            </h1>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
