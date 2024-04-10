import React from 'react'

const SmallCard = () => {
  return (
    <div className='rounded m-4 p-2 flex shadow-slate-300 shadow-xl h-20'>

      <div className='bg-slate-300 p-2 rounded w-1/6 h-full'></div>
        &nbsp;
      <div className=' m-3'>
        <div className='bg-slate-300 m-1'>Company Name</div>
        <div className='bg-slate-300'>Designation</div>
        
      </div>
    </div>
  )
}

export default SmallCard