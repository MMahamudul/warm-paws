import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { IoMdLogIn } from 'react-icons/io';
import MyContainer from './MyContainer';
import MyLink from './MyLink';


const Navbar = () => {
    return (
        <div>
            <MyContainer className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <nav
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
            <MyLink to='/'>Home</MyLink>
        </li>
        <li>
            <MyLink to='/services'>Services</MyLink>
        </li>
        <li>
            <MyLink to='/profile'>Profile</MyLink>
        </li>
      </nav>
    </div>
    <div className='flex items-center gap-2'>
      
        <img className="w-[180px] h-[65px] " src={logo} alt="" />
         
    </div>
    
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <nav className="menu menu-horizontal">
        <li>
            <MyLink className="text-xl" to='/'>Home</MyLink>
        </li>
        <li>
            <MyLink className="text-xl"to='/services'>Services</MyLink>
        </li>
        <li>
            <MyLink className="text-xl" to='/profile'>Profile</MyLink>
        </li>
    </nav>
  </div>
  <div className="navbar-end">
    <NavLink to='' className="btn btn-primary  text-white font-semibold px-5 py-2 rounded-lg"><IoMdLogIn size={24}/>   Login</NavLink>
  </div>
</MyContainer>
        </div>
    );
};

export default Navbar;