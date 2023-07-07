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
        <a href='#'>
          <img className='h-[80px]' src={Logo} alt='logo' />
        </a>
        <button className='btn btn-sm p-5 text-center text-[8px] ] lg:text-[15px] font-primary ' onClick={handleClick}> Back to Work </button>
      </div>
    </div> 
  </header>
  )
};

export default CreativeHeader;