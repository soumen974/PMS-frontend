import './App.css'
import Slidebar from './components/Slidebar'
import Dashboard from './components/Dashboard'

import { useState } from 'react'

function App() {
   const [SlidebarToggle, setSlidebarToggle]=useState(false)
  return (
    <div>
      <Slidebar SlidebarToggle={SlidebarToggle}/>
      <Dashboard 
      SlidebarToggle={SlidebarToggle}
      setSlidebarToggle={setSlidebarToggle}/>
    </div>
  )
}

export default App
