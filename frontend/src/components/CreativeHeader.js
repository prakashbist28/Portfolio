import React from 'react';
import Logo from '../assets/portlogo.png'
import {useNavigate} from 'react-router-dom'


const CreativeHeader = () => {
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate('/')
  }
  return (
  <header className='py-4 mb-8 '>
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <a href='/'>
          <img className='h-[80px] hover:scale-125  transition duration-500' src={Logo} alt='logo' />
        </a>
        <button className='btn btn-sm hover:bg-black text-[10px] lg:text-[15px] font-bold font-secondary' onClick={handleClick}> Back to Work </button>
      </div>
    </div> 
  </header>
  )
};

export default CreativeHeader;
