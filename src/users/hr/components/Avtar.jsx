import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Avtar() {
    const [isStateTrue, setIsStateTrue] = useState(false);
    const wrapperRef = useRef(null);

    const avtar_click = () => {
        setIsStateTrue(prevState => !prevState);
    };

    useEffect(() => {
        function handleClickOutside(event) {
          if (isStateTrue && !event.target.closest('.second-button')) {
            setIsStateTrue(false);
          }
        }
    
        document.body.addEventListener('click', handleClickOutside);
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
        };
      }, [isStateTrue]);
    
  return (
    <>
    
    <button onClick={avtar_click}  className="second-button flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
    <span className="sr-only">Open user menu</span>
    <img className="w-8 h-8 me-2 rounded-full" src="https://flowbite.com/docs/images/examples/image-2@2x.jpg" alt="user photo"/>
    Soumen Bhunia
    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>

    <div className={`${isStateTrue ? 'visible' : 'hidden'} z-10 absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`} >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div className="font-medium ">TCS</div>
        <div className="truncate">Soumen@sb.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
        <li>
            <Link to="/HR/account" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account</Link>
        </li>
        <li>
            <Link to="/HR/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
        </li>
       
        </ul>
        <div className="py-2">
        <Link to="/Login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
        </div>
    </div>

    </>
  )
}
