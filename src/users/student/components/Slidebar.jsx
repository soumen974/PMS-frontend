import React from 'react'
import {FaAddressBook, FaBars, FaBehanceSquare, FaBell, FaBookReader, FaBriefcase, FaCog, FaComments, FaCross, FaFacebookMessenger, FaHSquare, FaHome, FaInfoCircle, FaRegWindowClose, FaSignOutAlt, FaUser, FaXbox} from 'react-icons/fa'


const Slidebar = ({SlidebarToggle}) => {
  return (
    <div className={'${SlidebarToggle? " " : " block "}w-64 bg-pink-900 fixed h-full px-5 py-5 transition: all 0.5s ease-in-out'}>
      <div className='my-2 mb-4'>
        <div className='flex ' >
        <FaBell className='rounded hover:shadow hover:bg-pink-700 inline-block w-7 h-6 text-white font-bold mr-28'></FaBell>
        <FaBars className='rounded hover:shadow hover:bg-pink-700 inline-block w-7 h-6 text-white font-bold'></FaBars>
        </div>
      </div>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 py-2'>
          <a href="" className='px-3'>
            <FaHome className='inline-block w-5 h-5 mr-2 -mt-2'></FaHome>
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 py-2'>
          <a href="" className='px-3'>
            <FaUser className='inline-block w-5 h-5 mr-2 -mt-2'></FaUser>
            Profile
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 py-2'>
          <a href="" className='px-3'>
            <FaBriefcase className='inline-block w-5 h-5 mr-2 -mt-2'></FaBriefcase>
            My placements
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 py-2'>
          <a href="" className='px-3'>
            <FaBookReader className='inline-block w-5 h-5 mr-2 -mt-2'></FaBookReader>
            My applications
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 py-2 mb-10'>
          <a href="" className='px-3'>
            <FaComments className='inline-block w-5 h-5 mr-2 -mt-2'></FaComments>
            Feedback
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 mb-5'>
          <a href="" className='px-3 py-3'>
            <FaCog className='inline-block w-4 h-5 mr-2 -mt-2'></FaCog>
            Settings
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 mb-5'>
          <a href="" className=' px-3 py-3 '>
            <FaInfoCircle className='inline-block w-4 h-5 mr-2 -mt-2'></FaInfoCircle>
            Help
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-pink-700 '>
          <a href="" className=' px-3 py-3 '>
            <FaSignOutAlt className='inline-block w-4 h-5 mr-2 -mt-2'></FaSignOutAlt>
           LogOut
          </a>
        </li>
      </ul>
    </div>
  )
}
  
export default Slidebar