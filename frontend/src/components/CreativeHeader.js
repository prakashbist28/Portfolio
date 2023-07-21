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
      <div className='flex justify-between items-center'>
        <a href='https://prakashbist.onrender.com'>
          <img className='h-[80px]' src={Logo} alt='logo' />
        </a>
        <button className='btn btn-sm text-[10px] lg:text-[15px] font-bold font-secondary' onClick={handleClick}> Back to Work </button>
      </div>
    </div> 
  </header>
  )
};

export default CreativeHeader;
