import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Section1 from '../components/Section1'
import TopComp from '../components/TopComp'
import PlacementGraphs from '../components/PlacementGraphs'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import InappLoader from '../../Loader/InappLoader'

export default function UserEntry() {

  const [isLoading,setisLoading]=useState(false);
  
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },400)
}, [])

  return (
    <>

    <div>
      {
        
          isLoading?
          <>
          <InappLoader/>
          </>
        
        :
        <>
        <Nav/>
        <Section1/>
        <div className='max-w-screen-2xl  items-center justify-between mx-auto px-5 pb-10 space-y-[1vw]'>
            
            
            <TopComp/>
            <PlacementGraphs/>
            <Faq/>
            
         </div>
         <Footer/>
        </>
        
        
      }
      
    </div>
    
      

    </>
  )
}
