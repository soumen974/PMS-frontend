import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import InappLoader from '../../../Loader/InappLoader';
import Sidebar_student from '../components/Sidebar_student';
import Headder_student from '../components/Headder_student';
import Headder from "../../Common_components/Headder";

export default function StudentLandingLayout() {
  document.title = "Placement Module | Student";
  const [isLoading,setisLoading]=useState(false);
  
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },400)
}, [])
  return (
    <>
    {
      isLoading?
      <InappLoader/>
      :
      <>
    <div className="">
      <div className="flex h-screen overflow-hidden  dark:bg-slate-">
        <Sidebar_student/>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Headder/>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
   
    </>
     }
      
    </>
  )
}
