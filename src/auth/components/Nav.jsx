import React from 'react'
import { BrowserRouter as Router, NavLink,Link } from 'react-router-dom';
import CUTM_Logo from "../assets/CUTM-logo.svg";
export default function Nav() {
  return (
    <>

        <nav className=" border-red-800 border-t-[3px] bg-white drop-shadow-lg fixed w-full z-40 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img  src={CUTM_Logo} className="w-[8rem]" alt="" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
                <Link to={'/SignUp'}> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button></Link>
                <Link to={'/Login'}><button type="button" className="text-black border border-white hover:border-black    focus:ring-4 focus:outline-none focus:ring-black font-medium rounded text-md px-4 py-2 text-center   dark:focus:ring-black">Login</button></Link>
                
                <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Placement Module</span>

            </div>
            </div>
        </nav>
    </>
  )
}
