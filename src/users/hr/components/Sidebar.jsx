import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
export default function Sidebar() {
    const [OpenNavMenu,setOpenNavMenu]=useState(false);

  return (
    <>
     <aside className=' translate-x-[-15rem] md:lg:translate-x-0  absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-slate-700 dark:bg-[]  duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0  '>
            
            <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
                <NavLink>
                    <img src="" alt="" /> 
                </NavLink>
                <button  className="block lg:hidden">
                 
                </button>
            </div>


            <div className='flex flex-col overflow-y-auto duration-300 ease-linear'>
              <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
              <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold ">Menu</h3>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* nav links */}
                                <li> <NavLink  to="/HR/home" className={({isActive}) => ` ${ !isActive ? "  hover:bg-opacity-10 hover:bg-gray-100 text-white   " : " bg-green-300 dark:bg-transparent  text-black dark:text-white  hover:text-black  hover:bg-green-200    dark:border dark:border-[]  dark:hover:bg-opacity-10 dark:hover:bg-gray-100  "}  group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `}> Dashboard</NavLink> </li>
                                <li > <NavLink to="/HR/jobposting" className={({isActive}) => ` ${ !isActive ? "  hover:bg-opacity-10 hover:bg-gray-100 text-white " : " bg-green-300   text-black hover:text-black   hover:bg-green-200  "} group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `}> Job Posting </NavLink></li>
                                <li > <NavLink to="/HR/Applicants" className={({isActive}) => ` ${ !isActive ? "  hover:bg-opacity-10 hover:bg-gray-100 text-white" : " bg-green-300   text-black hover:text-black   hover:bg-green-200  "} group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4  `}> Applicants </NavLink></li>
                                <li className='group  hover:bg-opacity-10 hover:bg-gray-100 text-white relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4'>
                                </li>           
                </ul>
              </div>

              <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold ">
                   OTHERS
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                    <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-'>
                    Lorem
                    </li>

                    <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-'>
                    Lorem
                    </li>

                    <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-'>
                    Lorem
                    </li>
                </ul>
              </div>

              </nav>
            </div>
            
         
        </aside>
    </>
  )
}
