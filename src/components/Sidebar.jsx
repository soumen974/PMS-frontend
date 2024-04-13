import React from 'react'

import "./Navbar.css";

export const Sidebar = (menuOpen) => {
  return (
    <div className={menuOpen ? "open" : ""}>
      <ul >
      <FaBell ></FaBell>
        <li >
          <a href="" className=''>
            <FaHome ></FaHome>
            Home
          </a>
        </li> 

        <li >
          <a href="" className=''>
            <FaUser ></FaUser>
            Profile
          </a>
        </li>
        <li >
          <a href="" className=''>
            <FaBriefcase ></FaBriefcase>
            My placements
          </a>
        </li>
        <li>
          <a href="" className=''>
            <FaBookReader ></FaBookReader>
            My applications
          </a>
        </li>
        <li >
          <a href="" className=''>
            <FaComments></FaComments>
            Feedback
          </a>
        </li>
        <li >
          <a href="" className=''>
            <FaCog></FaCog>
            Settings
          </a>
        </li>
        <li>
          <a href="" className=''>
            <FaInfoCircle ></FaInfoCircle>
           Help
          </a>
        </li>
        <li >
          <a href="" className=''>
            <FaSignOutAlt ></FaSignOutAlt>
           LogOut
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Slidebar
