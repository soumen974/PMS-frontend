import React, { useEffect, useState } from 'react'
import Authentication from '../components/Authentication';
import SignUppageUsedImg from "../assets/SignUppageUsedImg.svg";
import InappLoader from "../../Loader/InappLoader";
export default function SignUp () {

  document.title = "New User..! [PlacementModule]";

  const [isLoading,setisLoading]=useState(false);
  
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },400)
}, [])


  const  EntryWayMessage_login="Already have an account";

  return (
    <>
    
    {
      isLoading?
      <>
      <InappLoader/>
      </>
    
    :
      
      <div className=" grid  place-content-center h-[100vh]  bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400 ">
      
      <div className=' md:grid rounded xl:gap-3   bg-white grid-cols-[30%,70%] shadow-lg shadow-black-500/50 md:pl-4 p-10 md:p-0'>
        <Authentication LinkButtonName={'SignUp'} Links={'/Login'} SignUpformUse={true} EntryWayMessage={EntryWayMessage_login} />
        <img className='rounded-md hidden md:block md:pl-4 xl:pl-3' src={SignUppageUsedImg} alt="" />
      </div>
      
      
    </div>}
     </>
  )
}
