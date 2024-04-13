import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({SlidebarToggle, setSlidebarToggle}) => {
  return (
    <div className={'${SlidebarToggle ? "" : "ml-64" } w-full'}>
      <Navbar 
      SlidebarToggle={SlidebarToggle}
      setSlidebarToggle={setSlidebarToggle}/>
    </div>
  )
}

export default Dashboard