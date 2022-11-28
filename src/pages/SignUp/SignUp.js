import React from 'react';

const SignUp = () => {
    return (
        <div className='m-10 text-rose-900 '>
 <div className="hero min-h-screen w-auto bg-base-200 ">
  <div className="hero-content flex-col w-full">
    <div className="text-center ">
      <h1 className="text-5xl font-bold ">Signup now!</h1>
      <p className="py-6">For log in ,sign in first.</p>
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
            <span className="label-text">Phot URL</span>
          </label>
          <input type="text" placeholder="photo url" className="input input-bordered rounded-none" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered rounded-none" />

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-rose-900 rounded-none">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</div>
    
        </div>
    );
};

export default SignUp;