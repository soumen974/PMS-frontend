import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle, FaUserClock} from 'react-icons/fa'
// import SlidebarToggle from 'react';

const Navbar = ({slidebarToggle , setSlidebarToggle}) => {
  
  return (
    <nav className='bg-pink-800 px-4 py-3 flex justify-between'>
       <div className='flex items-center text-xl'>

        <FaBars className='text-white me-4 '></FaBars>

       <span className='text-white font-semibold'>Placement Cell</span>
       </div>
       <nav className='bg-pink-800 px-4 py-3 flex justify-between'></nav>
       <div className='flex items-center gap-x-5'>
       <div className='relative md:w-65'>
        <span className='relative md:absolute inset-y-0 left-0 flex items'></span>
       </div>

       <div className='text-white'>
        
        <FaBell className='w-6 h-6 mt-1'></FaBell></div>
        
       <div className='relative'>
  
            <FaUserCircle className='w-6 h-6 mt-1 text-white group cursor-pointer' 
               onClick={() => setSlidebarToggle(!slidebarToggle)}/>
          
       </div> 
       </div>
    </nav>
  )
}

export default Navbar