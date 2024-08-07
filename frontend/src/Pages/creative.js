import React from 'react'
import CreativeHeader from '../components/CreativeHeader'
import DigArt from '../components/DigArt'
import { BiArrowToTop } from "react-icons/bi";
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

function Creative() {

  const handleClick = () =>{
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  return (
    <div className='bg-site bg-no-repeat bg-cover  overflow-hidden'>
      <div> 
        <CreativeHeader />
        <DigArt  />
        <button onClick={handleClick} className='w-20 h-20 border-2  border-teal-400 rounded-full flex items-center justify-center z-10 fixed bottom-10 right-10 bg-teal-500 hover:bg-teal-400/50 transition duration-500'>
          <BiArrowToTop className=' text-[35px]'/>
        </button>
      </div>
      <div className='h-40'></div>
    </div>
  )
}

export default Creative