import React from 'react';
import {FaGoogle } from "react-icons/fa";

const LogIn = () => {
    return (
        <div className='m-10 text-rose-900 '>
 <div className="hero min-h-screen w-auto bg-base-200 ">
  <div className="hero-content flex-col w-full">
    <div className="text-center ">
      <h1 className="text-5xl font-bold ">Login now!</h1>
      <p className="py-6">For more features ,please log in.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered rounded-none" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered rounded-none" />

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-rose-900 rounded-none">Login</button>
        </div>

       <h1>or, continue with  <button className="btn bg-rose-900 rounded-none"><FaGoogle></FaGoogle> Google</button></h1> 
      </div>
    </div>
  </div>
</div>
    
        </div>
    );
};

export default LogIn;