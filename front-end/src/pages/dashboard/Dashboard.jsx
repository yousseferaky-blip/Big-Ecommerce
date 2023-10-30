import React, { useState } from 'react'
import TopBar from '../../component/dashboard/TopBar'
import SideBar from '../../component/dashboard/SideBar'
import { Outlet } from 'react-router-dom'
import './dashboard.css'
import Setting from '../../setting/Setting'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
    </Helmet>
    <div className='dashboard '>
      <Setting />
        <TopBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className=' position-relative d-flex  gap-2' style={{marginTop:'70px'}}>
            <SideBar isOpen={isOpen}/>
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default Dashboard