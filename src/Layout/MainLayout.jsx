import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const MainLayout = () => {
  return (
    <div>
         <Header />
        <div className=' shadow rounded-2xl px-10 py-3 mt-6   xs:ml-3 ssm1:ml-10 ssm2:ml-12 lg:ml-14 md:ml-12  '>
       
        <Outlet/> 
        
        </div>
        <Footer/>
         
    </div>
  )
}

export default MainLayout