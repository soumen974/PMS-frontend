import './App.css'
import Slidebar from './components/Slidebar'
import Dashboard from './components/Dashboard'
// import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
   const [slidebarToggle, setSlidebarToggle] = useState(false)
  return (
    <div>
      <Slidebar slidebarToggle={slidebarToggle}/>
      <Dashboard 
      slidebarToggle={slidebarToggle}
      setSlidebarToggle={setSlidebarToggle}/>
    </div>
  )
}

export default App
