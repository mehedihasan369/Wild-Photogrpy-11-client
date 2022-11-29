import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser ,providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
 
 

      const [error, setError] = useState('');
     
      const navigate = useNavigate();
      const location = useLocation();
  
      const from = location.state?.from?.pathname || '/';



  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user.emailVerified){
                navigate(from, {replace: true});
            }
        })
        .catch(error => console.error(error))
      }
  const handleSignUp = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      createUser(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
          form.reset();
          setError('');})
    .catch(error => console.error(error))

  }




    return (
        <div className='m-10 text-rose-900 text-center'>
 <div className="hero min-h-screen w-auto bg-base-200 ">
  <div className="hero-content flex-col w-full">
    <div className="text-center ">
      <h1 className="text-5xl font-bold ">Sign Up </h1>
      <p className="py-6">For log in ,sign in first.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered rounded-none" required />
        </div>
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
          <input type="Password" name='password' placeholder="password" className="input input-bordered rounded-none"  required />

        </div>
        <div className="form-control mt-6">
          <input className="btn bg-rose-900 rounded-none" type="submit" value="Signup" />
         
        </div>
        {error}
      </form>
      <h1 className='mx-5 mb-5'>Already signup  <Link to="/login" className=" text-lg font-semibold underline"> Login ..</Link> </h1> 
      <h1 className='mx-5 mb-5'>or, continue with  <button onClick={handleGoogleSignIn }  className="btn bg-rose-900 rounded-none"><FaGoogle></FaGoogle> Google</button></h1> 
    </div>
  </div>
</div>
    
        </div>
    );
};

export default SignUp;