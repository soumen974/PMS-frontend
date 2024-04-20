import React from 'react'
import Com01 from "../assets/com-1.svg";
import Com02 from "../assets/com-2.svg";
import Com03 from "../assets/com-3.svg";
import Com04 from "../assets/com-4.svg";


export default function TopComp() {
  return (
    <>
    <div className="max-w-screen-xl  items-center justify-between mx-auto  mt-[7rem] mb-5">
        <h1 className='text-left font-bold text-2xl text-gray-600 pb-10'>Top Companies</h1>
        <ul className='flex flex-wrap items-center justify-center gap-[5.2vw] '>
            <li>
                <img className='lg:w-[8vw] w-[23vw]' src={Com01} alt="" />
            </li>
            <li>
                <img className='lg:w-[8vw] w-[23vw]' src={Com02} alt="" />
            </li>
            <li>
                <img className='lg:w-[8vw] w-[23vw]' src={Com03} alt="" />
            </li>
            <li>
                <img className='lg:w-[8vw] w-[23vw]' src={Com04} alt="" />
            </li>
            
        </ul>

    </div>
    </>
  )
}
