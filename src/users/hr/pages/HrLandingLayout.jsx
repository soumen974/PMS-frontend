import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import InappLoader from '../../../Loader/InappLoader'
import Sidebar from '../components/Sidebar';
import Headder from '../components/Headder';

export default function HrLandingLayout() {

  document.title = "HR -[Placement Module]";
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
        <Sidebar/>
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
