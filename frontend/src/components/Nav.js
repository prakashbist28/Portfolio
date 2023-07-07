import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare, BsSquare, BsChatSquareText} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div ClassName='container mx-auto'>
      {}
    <div className='w-full bg-black/20 h-[56px] md:h-[76px] lg:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
      <Link
        to='home'
        activeClass='active' 
        smooth={true} 
        spy={true} 
        offset={-200}
        className='cursor-pointer w-[35px] h-[35px] justify-center flex items-center'>
         <BiHomeAlt className='h-5  '/>
      </Link>

      <Link
        to='about'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-150}
        className='cursor-pointer w-[35px] h-[35px] justify-center  flex items-center'>
         <BiUser className='h-5 ' />
      </Link>

      <Link 
        to='services' 
        activeClass='active' 
        smooth={true} 
        spy={true}
        offset={-200} 
        className='cursor-pointer w-[40px] h-[40px] justify-center flex items-center'>
         <BsClipboardData className='h-5 '/>
      </Link>

      <Link 
        to='work'
        activeClass='active'
        smooth={true} 
        spy={true}
        offset={-150} 
        className='cursor-pointer w-[35px] h-[35px] justify-center flex items-center'>
         <BsBriefcase className='h-5  ' />
      </Link>

      <Link 
        to='Contact' 
        activeClass='active' 
        smooth={true} 
        spy={true}
        offset={-200} 
        className='cursor-pointer w-[35px] h-[35px] justify-center flex items-center'>
         <BsChatSquareText className='h-5  '/>
      </Link>
      
      
    </div>
    </div>
  </nav>)
};

export default Nav;
