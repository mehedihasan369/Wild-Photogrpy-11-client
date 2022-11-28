import React from 'react';

const LogIn = () => {
    return (
        <div className='m-10 '>
            <h1 className='text-6xl'>login</h1>

    <div className='m-10 grid grid-cols-1  gap-5 '>
            <div>
                <h1>Email:</h1>
            <input type="email" placeholder="Type email here" className="input input-bordered input-secondary text-rose-900  w-full max-w-xs mt-2" />
            </div>

            <div>
                <h1>Password:</h1>
            <input type="password" placeholder="Type password here" className="input input-bordered input-secondary w-full max-w-xs mt-2" />
            </div>
            <input type="submit" value="Submit" className="btn bg-rose-900 w-32" />
    </div>
            
           
            
        </div>
    );
};

export default LogIn;