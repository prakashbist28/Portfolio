import React from 'react'
import CreativeHeader from '../components/CreativeHeader'
import DigArt from '../components/DigArt'

function Creative() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <div> 
        <CreativeHeader />
        <DigArt />
      </div>
      <div className='h-[40px]'></div>
    </div>
  )
}

export default Creative