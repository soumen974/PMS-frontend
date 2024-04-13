import React, { useState } from 'react';
import logo from '../images/CenturionLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import Profile from '../users/student/pages/Profile';
import {useNavigate} from 'react-router-dom';
import { loginStorage } from '../LoginStorage';

const Header = () => {
  const isLoggedIn = loginStorage.details && loginStorage.details.code !== '' && loginStorage.details.code !== undefined;
  const code = isLoggedIn ? loginStorage.details.code : '';
  const navigate=useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHomeClick = (event) => {
    event.preventDefault(); 
    if (code === 'admin') {
      console.log(loginStorage.details);
      navigate('/Admin/Home');
    } else if (code === 'hr') {
      navigate('/HR/Home');
    } else if (code === 'student') {
      navigate('/Student/Home');
    } else {
      navigate('/');
    }
  };

  return (
    <>
    <div className='bg-red-700 h-0.5'></div>
    <div className="bg-white py-4 px-6 md:flex md:items-center md:justify-between shadow-md">
      <div className="flex items-center justify-between">
      <Link to={'/'}><img
          src={logo}
          alt="Logo"
          className="h-13 w-7 mr-4 ml-2"
        /></Link>
        <Link to="#"><FontAwesomeIcon icon={faBars} className="text-2xl md:hidden" onClick={toggleMenu} /></Link>
      </div>

      <div className={`md:flex-grow md:text-center md:flex md:items-center md:justify-center ${showMenu ? 'block' : 'hidden'}`}>
       <Link className="block md:inline-block text-black text-lg mr-3 hover:text-red-700"onClick={handleHomeClick} >Home</Link>
        <Link to="#" className="block md:inline-block text-black text-lg mr-3 hover:text-red-700">Contact Us</Link>
        <Link to="#" className="block md:inline-block text-black text-lg mr-3 hover:text-red-700">About Us</Link>
        
      </div>

      <div className={`flex items-center ${showMenu ? 'block' : 'md:ml-auto'}`}>
        <Link to="#" className="text-black text-lg mr-4 ">
         <FontAwesomeIcon icon={faBell} className="text-red-700 bg-amber-500 p-2 rounded-full" />
        </Link>
        <Link to="/profile" className="text-black text-lg ">
          <FontAwesomeIcon icon={faUser} className="text-white bg-red-700 p-3 text-xl rounded-full" />
        </Link>
        
      </div>
    </div>
    
    </>
  )
}

export default Header;
