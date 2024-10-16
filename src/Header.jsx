import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-[crimson] text-[whitesmoke]">
    <div className="navbar-start">
      <div className="dropdown hidden xs:block ssm2:block ssm1:block">
        <div tabIndex={0} role="button" className="btn btn-ghost    ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4 text-[darkcyan] font-bold w-52 p-2 shadow">
         <li><Link to="/">Home </Link> </li>
         <li><Link to="/history">History </Link> </li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost text-[whitesmoke]  
      xs:text-[0.5rem]
       ssm1:text-[0.7rem]  ssm2:text-[0.7rem]  lg:text-[1rem] md:text-[1rem] sm:text-[1rem]">
      বৈষম্যবিরোধী ছাত্র আন্দোলন-২০২৪</Link>
    </div>
    <div className="navbar-center text-3xl font-bold xs:hidden ssm2:hidden ssm1:hidden sm:hidden  md:flex lg:flex">
      <ul className="menu menu-horizontal px-3 text-[white]">
         <NavLink to="/">Home </NavLink>   &nbsp; &nbsp; &nbsp; &nbsp; 
         <NavLink to="/history">History </NavLink>  
        
         
      </ul>
    </div>
    <div className="navbar-end flex gap-4 items-center text-[whitesmoke]  ">
      <NavLink  className=" lg:text-[1rem] xs:text-[0.5rem] 
      md:text-[0.8rem] ssm1:text-[0.6rem]  ssm2:text-[0.6rem]  xs:py-1 xs:px-1"  to="/about">About</NavLink> 
       <NavLink className="lg:text-[1rem] 
        xs:text-[0.5rem] md:text-[0.8rem] ssm1:text-[0.6rem] ssm2:text-[0.6rem]  xs:py-1 xs:px-1 " to="/contact">Contact</NavLink>  
    </div>
  </div>
  )
}

export default Header