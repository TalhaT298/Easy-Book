import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Shared/Footer'
import Navbar from '../Components/Shared/Navbar'

const Main = () => {
  return (
    <div className='h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default Main
