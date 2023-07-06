import React from 'react'
import Art from '../components/Art'
import CreativeHeader from '../components/CreativeHeader'

function Creative() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <div> 
        <CreativeHeader />
        <Art />
      </div>
      <div className='h-[40px]'></div>
    </div>
  )
}

export default Creative