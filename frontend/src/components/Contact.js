import React, { useRef, useState,useEffect} from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';
import axios from 'axios'

const Contact = () => {

  const form = useRef();
  const [serviceid,setserviceid]=useState('');
  const [templateid,settemplateid]=useState('');
  const [userid,setuserid]=useState('');

  useEffect(() => {
    // Fetch the API key from the backend
    axios.get('https://prakashback.onrender.com/api/api-key')
      .then(response => {
        setserviceid(response.data.serviceid);
        settemplateid(response.data.templateid);
        setuserid(response.data.userid);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${serviceid}`, `${templateid}`, form.current, `${userid}`)
      .then((result) => {
          console.log(result.text);
        alert('message sent')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  };
  
  return (
  <section className='min-h-[80vh] lg:min-h-[75vh] flex items-center my-20' id='Contact'> 
    <div className='container mx-auto items-center'>
      <div className='flex flex-col lg:flex-row'>
      <div>
        <motion.div 
        variants={fadeIn('left',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false, amount:0.3}} 
        className='flex-1 flex justify-start items-center'>
          <div>
          <h3 className='uppercase text-gradient font-secondary mb-12 leading-none text-[45px] lg:text-[90px] '> Contact Me  </h3>
          </div>
        </motion.div>
      </div>

      <motion.form 
      variants={fadeIn('right',0.3)} 
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once:false, amount:0.3}} 
      ref={form} onSubmit={sendEmail}
      className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-center font-tertiary '>
        <input name="user_name" className='bg-transparent border-b border-purple-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all' type='text' placeholder='Your Name' />
        <input name="user_email" className='bg-transparent border-b border-purple-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all' type='email' placeholder='Your Email' />
        <textarea name="message" className='bg-transparent border-b border-purple-400 py-3 outline-none w-full placeholder:text-blue focus:border-blue-400 transition-all resize-none mb-12' placeholder='Your Message'></textarea>
        <button type="submit" value="Send" className='btn btn-lg'>Send message</button>
      </motion.form>

      </div>
    </div>
  </section>
  )
};

export default Contact;
