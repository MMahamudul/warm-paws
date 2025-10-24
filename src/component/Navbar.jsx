import React from 'react';
import { Link } from 'react-router'; 
import logo from '../assets/logo.png'; 
import icon from '../assets/icon.png'; 
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import { RxAvatar } from 'react-icons/rx'; 
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleSignOut =()=>{
    logOut()

  }
    return (
        <div className='bg-[#b3d9e6] '>
            <MyContainer className="navbar ">
              {/* {user && user.email} */}
  <div className="navbar-start ">
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
            <MyLink className=" text-lg " to='/'>Home</MyLink>
        </li>
        <li>
            <MyLink className="text-lg "to='/services'>Services</MyLink>
        </li>
        <li>
            <MyLink className="text-lg" to='/profile'>Profile</MyLink>
        </li>
    </nav>
  </div>
  <div className="navbar-end flex gap-2">
    <img className='rounded-full w-10 h-10' src={`${user ? user.photoURL : icon}`} alt="" />
    
    
    {user ? <button onClick={handleSignOut} className="mr-4 btn bg-blue-900 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-800 transition">SignOut</button> : <Link to='/auth/signin' className="mr-4 btn bg-blue-900 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-800 transition">SignIn</Link>}
    
  </div>
</MyContainer>
        </div>
    );
};

export default Navbar; 
