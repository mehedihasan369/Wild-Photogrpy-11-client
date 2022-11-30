import React from 'react';


const MyReview2 = ( {data } ) => {
  
 const {customer,review, email,serviceName} = data
    return (
        <div>
                <div className="card w-auto m-10 p-5  bg-base-100 border">
           <div className="card-body border-2 border-rose-900">
            <div className="justify-start">
            <h2 className="text-3xl font-bold "> {customer} </h2>
             <p>{email}</p>
             <p className='font-semibold'>Service:{serviceName}</p>
            </div>
            
             <p className='font-semibold'>{review}</p>
             <div className="card-actions justify-end">
               <button  className=" btn bg-rose-900">Edit</button>
               <button className="  btn bg-rose-900">Delete</button>
             </div>
           </div>
     </div>
        </div>
    );
};

export default MyReview2;