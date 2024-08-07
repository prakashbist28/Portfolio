import React from 'react';
import Logo from '../assets/portlogo.png'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate('/creative')
  }
  return (
  <header className='py-4 mb-8 '>
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <a href='/'>
          <img className='h-[80px] hover:scale-125  transition duration-500 ' src={Logo} alt='logo' />
        </a>

        <button className='btn btn-sm md:btn-lg text-[14px] md:text-[18px] mt-2 font-bold font-secondary tracking-wide shadow-lg hover:shadow-teal-500' onClick={handleClick}> Discover More</button>
      </div>
    </div> 
  </header>
  )
};

export default Header;
