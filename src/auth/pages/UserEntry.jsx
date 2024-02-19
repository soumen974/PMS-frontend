import React from 'react'
import { BrowserRouter as Router, NavLink,Link } from 'react-router-dom';

export default function UserEntry() {
  return (
    <>
          <marquee className="bg-red-500 text-white text-[1.2rem]" behavior="" direction="">chill!! ,, this is just for demo</marquee>

   <div className="  bg-gradient-to-r fixed flex items-center justify-center w-screen h-screen " >
      <div className="  grid justify-evenly gap-10 opacity-110  p-10 ">
            <h1 className=' text-[3rem] sm:text-[7rem]  text-center '>Welcome to the project</h1>


            <div className=" flex flex-wrap justify-center  text-center gap-10 py-[2rem] ">
                  <Link to={'/SignUp'}> <button className=' bg-blue-200 hover:opacity-80  sm:h-[6rem]  sm:w-[18rem] shadow-lg text-[1.4rem]   p-2 px-14 font-light    '>Signup</button></Link>
                <Link to={'/Login'}> <button className='bg-purple-500 border-2 hover:opacity-80 sm:h-[6rem]  sm:w-[18rem] shadow-2xl     text-[1.4rem]   p-2 px-14 font-light text-white'>Login</button></Link>
          </div>
      </div>
   </div>
    </>
  )
}
