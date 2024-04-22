import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle, FaUserClock} from 'react-icons/fa'

const Navbar = ({slidebarToggle, setSlidebarToggle}) => {
  return (
    <nav className='bg-pink-800 px-4 py-3 flex justify-between'>
       <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSlidebarToggle(!slidebarToggle)}></FaBars>
        <span className='text-white font-semibold'>Placement Cell</span>
       </div>
       <div className='flex items-center gap-x-5'>
       <div className='relative md:w-65'>
        <span className='relative md:absolute inset-y-0 left-0 flex items'>
        <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button></span>
        <input type='text' className='w-full px-4 py-1 pl-12 rounde shadow outline-none'/>
       </div>

       <div className='text-white'><FaBell className='w-6 h-6'></FaBell></div>

  <div className='relative'>
        <button className='text-white group'>
            <FaUserCircle className='w-6 h-6 mt-1'/>
            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
            <ul className='py-2 text-sm text-gray-950'>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            </div>
        </button>
  </div> 
    </div>
    </nav>
  )
}

export default Navbar