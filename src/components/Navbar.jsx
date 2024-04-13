import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"


import "./Navbar.css";
// import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {

  const [menuOpen, SetmenuOpen] = useState(false)

  return <nav>
    <Link to="/" className='title'> 
      Placement Cell
      </Link>
      <div className="menu" onClick={() => {
        SetmenuOpen(!menuOpen)
      }}> 
        <span></span>
        <span></span>
        <span></span> 
      </div>
      {/* <div className='text-white'><FaBell className='w-6 h-6'></FaBell></div> */}
      {/* <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search" />
                        <label className="label-icon" htmlFor="search"></label>
                        <FaSearch className="material-icons"></FaSearch>
                    </div>
                </form>
            </div> */}

    <ul className='NavComp'>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
           <NavLink to="/services">Services</NavLink>
        </li>
        <li> 
            <NavLink to="/contact">Contact</NavLink>
        </li>
        </ul>
    {/* </ul> */}
  </nav> 

}
