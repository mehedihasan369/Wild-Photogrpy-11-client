import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import {FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {

  const { signIn,  providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
 
 

      const [error, setError] = useState('');
     
      const navigate = useNavigate();
      const location = useLocation();
  
      const from = location.state?.from?.pathname || '/';



  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            if(user){
              navigate(from, {replace: true});
          }
      })
      .catch(error => console.error(error))
    }

  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
        .then(result => {
            const user = result.user;
            if(user){
              navigate(from, {replace: true});
          }
            console.log(user);
            form.reset();
            setError('');})
      .catch(error => console.error(error))

    }



   

 
 

  
    return (
        <div className='m-10 text-rose-900 text-center'>
 <div className="hero min-h-screen w-auto bg-base-200 ">
  <div className="hero-content flex-col w-full">
    <div className="text-center ">
      <h1 className="text-5xl font-bold ">Login now!</h1>
      <p className="py-6">For more features ,please log in.</p>
 
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered rounded-none"  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none"  required />

        </div>
        <div className="form-control mt-6">
          <input  className="btn bg-rose-900 rounded-none" type="submit" value="Login" />
          {error}
        </div>

      
      </form>
     

      <h1 className='mx-5 mb-5'>New to SternPhotos  <Link to="/signup" className=" text-lg font-semibold underline"> Signup ..</Link> </h1> 

      <h1 className='mx-5 mb-5'>or, continue with  <button onClick={handleGoogleSignIn } className="btn bg-rose-900 rounded-none"><FaGoogle></FaGoogle> Google</button></h1> 
    </div>
  </div>
</div>
    
        </div>
    );
};

export default LogIn;