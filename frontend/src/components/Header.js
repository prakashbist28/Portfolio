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

        <button className='btn btn-sm text-[10px] lg:text-[15px] font-bold font-secondary ' onClick={handleClick}> Discover More</button>
      </div>
    </div> 
  </header>
  )
};

export default Header;
