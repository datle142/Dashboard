import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'
import Product from './Product'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      {/* <Home/> */}
      <Product />
    </div>
  )
}

export default App
