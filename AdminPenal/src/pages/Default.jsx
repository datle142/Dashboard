import React, {useState} from 'react'
import '../App.css'
import Sidebar from '../Sidebar'
import Home from './Home'
import Header from '../Header'
import Product from './Product'

function Default({children}) {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {setOpenSidebarToggle(!openSidebarToggle)  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {children}
      
    </div>
  )
}

export default Default;