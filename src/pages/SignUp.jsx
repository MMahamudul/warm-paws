import React from 'react';
import MyContainer from '../component/MyContainer';
import { Link, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from "react-hot-toast";
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoIosEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const {createUser, setUser, updateUser, googleSignIn} = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const handleGoogleLogIn = () =>{
    googleSignIn()
    .then(()=>{
      navigate('/');
    })
    .catch((error)=>{
       const errorMessage = error.message;
      toast.error(errorMessage);

    })
  }

  const handleSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name= form.name.value;

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passRegex.test(password)){
      toast.error("Password must be at least 6 characters long,contain at least a lowercase and a uppercase letter ")
      return;

    }

  
    createUser(email, password)
    .then((res) => {
      const user = res.user;
        toast.success('Registration successful');
        updateUser({displayName:name, photoURL: photo})
        .then(()=>{
        setUser({...user, displayName:name, photoURL: photo });
        navigate('/');
        })
        .catch((error)=>{
          const errorMessage = error.message;
          const errorCode = error.code;
        toast.error(errorCode, errorMessage);
        setUser(user);
        })
        
        
      })
    .catch((error)=>{
      const errorMessage = error.message;
      toast.error(errorMessage)
    })
    

  }
    return (
   <MyContainer>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-35">
    <div className=" lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 border-blue-50 shadow-xl rounded-md">
      <h1 className="text-lg text-center mt-2 py-2">Register Account</h1>
      <form onSubmit= {handleSignUp} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input 
          type="text" 
          className="input w-full" 
          name="name" 
          placeholder="Name"
          required />
          <label className="label ">Email</label>
          <input 
          type="email" 
          className="input w-full" 
          name="email" 
          placeholder="Email"
          required />
          <label className="label">Photo Url</label>
          <input 
          type="text" 
          className="input w-full" 
          name="photo" 
          placeholder="Photo Url"
          required />
          <div className='relative'>
             <label className="label">Password</label>
          <input 
          type={show ? 'text' : 'password'}
          className="input w-full" 
          name="password" 
          placeholder="Password"
          required />
          <span onClick={()=>setShow(!show)} className='absolute right-[24px] top-[36px] z-50'>
            {show ? <FaEye />: <IoIosEyeOff />}
            
            </span>

          </div>
         
          <button type="submit" className="btn mr-3 bg-blue-900 text-white my-2 px-6 py-2 text-sm hover:bg-blue-800 transition w-full">Register</button>
          <Link onClick={handleGoogleLogIn} className="btn btn-outline bg-base-100 text-blue-600 rounded-sm py-2 px-6 my-1 text-sm hover:bg-blue-900 hover:text-white transition"><FcGoogle size={24}/>Login With Google</Link>
          <p className='text-center my-2'>Already have an account?</p>
          <p>If you already have an account with us, please login at the <Link to="/auth/signin" className=" text-blue-600 ">login page</Link>.</p>
          
          
        </fieldset>
      </form>
    </div>
  </div>
</div>
       </MyContainer>
    );
};

export default SignUp;