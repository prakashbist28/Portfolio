import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase,  BsChatSquareText} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div ClassName='container mx-auto rounded-full'>
      {}
      <div className='relative'>
      <div className=' absolute bg-teal-400 blur-xl'></div>
    <div className='w-full mb-4 shadow-md shadow-teal-400 border-2 md:border-[3px] border-teal-400 bg-black/20 h-[56px] md:h-[76px] lg:h-[96px] backdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
      <Link
        to='home'
        activeClass='active' 
        smooth={true} 
        spy={true} 
        offset={-200}
        className='cursor-pointer w-[35px] h-[35px] md:w-[45px] md:h-[45px] justify-center flex items-center'>
         <BiHomeAlt className='h-5 md:h-8  '/>
      </Link>

      <Link
        to='about'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-150}
        className='cursor-pointer w-[35px] h-[35px] md:w-[45px] md:h-[45px]  justify-center  flex items-center'>
         <BiUser className='h-5 md:h-8' />
      </Link>

      <Link 
        to='tech' 
        activeClass='active' 
        smooth={true} 
        spy={true}
        offset={-200} 
        className='cursor-pointer w-[35px] h-[35px] md:w-[45px] md:h-[45px]  justify-center flex items-center'>
         <BsClipboardData className='h-5 md:h-8 '/>
      </Link>

      <Link 
        to='work'
        activeClass='active'
        smooth={true} 
        spy={true}
        offset={-150} 
        className='cursor-pointer w-[35px] h-[35px] md:w-[45px] md:h-[45px]  justify-center flex items-center'>
         <BsBriefcase className='h-5 md:h-8 ' />
      </Link>

      <Link 
        to='Contact' 
        activeClass='active' 
        smooth={true} 
        spy={true}
        offset={30} 
        className='cursor-pointer  w-[35px] h-[35px] md:w-[45px] md:h-[45px]  justify-center flex items-center'>
         <BsChatSquareText className='h-5 md:h-8'/>
      </Link>
      
      
    </div>
    </div>
    </div>
  </nav>)
};

export default Nav;
