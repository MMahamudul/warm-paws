import React from 'react';
import MyContainer from '../component/MyContainer';
import { Link } from 'react-router';

const Signin = () => {
  const handleSignIn =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

  }
    return (
       <MyContainer>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-35">
    <div className=" lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0  ">
      <h1 className="text-lg text-center mt-2 py-2">Account Login</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input mb-4" name="password" placeholder="Password" />
          <div><Link className="link link-hover text-blue-900 font-bold my-6">Forgot password?</Link></div>
          <button className="btn bg-blue-900 text-white rounded-sm py-2 px-6 my-3 text-sm hover:bg-blue-800 transition">Signin</button>
          <p>Don't have an account?</p>
          <Link to="/auth/signup" className="btn btn-outline bg-base-100 text-blue-600 rounded-sm py-2 px-6 my-3 text-sm hover:bg-blue-900 hover:text-white transition">Create Your Account</Link>
        </fieldset>
      </form>
    </div>
  </div>
</div>
       </MyContainer>
    
 
    );
};

export default Signin;
