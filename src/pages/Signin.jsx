import React, { useState } from 'react';
import MyContainer from '../component/MyContainer';
import { Link, useLocation, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from 'react-icons/fa6';
import { IoIosEyeOff } from 'react-icons/io';

const Signin = () => {
  const [error, setError] = useState('');
  const {logIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSignIn =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
    .then(() => {
        toast.success('You have Sign In Successful');
        navigate(`${location.state ? location.state : '/' }`)
        
      })
      .catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    setError(errorCode, errorMessage);
    toast.error(errorCode, errorMessage);
    }
  
  )
    

  }
    return (
       <MyContainer>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-35">
    <div className=" lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0  ">
      <h1 className="text-2xl font-semibold text-center mt-2 py-1">Account Login</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          type="email" 
          className="input w-full" 
          name="email" 
          placeholder="Email" 
          required />
          <div className='relative'>
            <label className="label">Password</label>
            <input 
            type={show ? 'text' : 'password'} 
            className="input mb-4 w-full" 
            name="password" 
            placeholder="Password"
            required />
            <span onClick= {()=>setShow(!show)} className='absolute right-[20px] top-[36px] z-50'>
              {show ? <FaEye /> : <IoIosEyeOff />}
            </span>

          </div>
          
          <div><Link className="link link-hover text-blue-900 font-bold my-6">Forgot password?</Link></div>
          <button className="btn bg-blue-900 text-white rounded-sm py-2 px-6 my-3 text-lg hover:bg-blue-800 transition">Login</button>
          <Link className="btn btn-outline bg-base-100 text-blue-600 rounded-sm py-2 px-6 my-3 text-lg hover:bg-blue-900 hover:text-white transition"><FcGoogle size={24}/>Login With Google</Link>
          {error && <p className='text-sm text-red-600'>{error}</p>}
          <p className='text-sm text-blue-950 font-semibold'>Don't have an account?</p>
          <Link to="/auth/signup" className="btn btn-outline bg-base-100 text-blue-600 rounded-sm py-2 px-6 my-3 text-lg hover:bg-blue-900 hover:text-white transition">Create Your Account</Link>
        </fieldset>
      </form>
    </div>
  </div>
</div>
       </MyContainer>
    
 
    );
};

export default Signin;
