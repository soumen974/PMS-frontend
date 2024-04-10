import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import InappLoader from '../../../Loader/InappLoader';
import Headder from '../../hr/components/Headder';
import Sidebar_admin from '../components/Sidebar_admin';

export default function AdminLandingLayout() {
  document.title = "Admin -[Placement Module]";
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
        <Sidebar_admin/>
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
