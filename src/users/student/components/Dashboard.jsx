import React from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'

const Dashboard = ({slidebarToggle, setSlidebarToggle}) => {
  return (
    <div className={`${slidebarToggle ? " " : " mr-64 "}w-full`}>
      <Navbar 
      slidebarToggle={slidebarToggle}
      setSlidebarToggle={setSlidebarToggle}/>
    </div>
  )
}

export default Dashboard