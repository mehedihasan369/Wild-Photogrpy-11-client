import React from 'react';


const MyReview2 = ( {data ,handleStatusUpdate,handleDelete} ) => {
  
  
 const {_id ,customer,review, email,serviceName} = data
    return (
        <div>
                <div className="card w-auto m-10 p-5 lg:h-auto bg-base-100 border">
           <div className="card-body border-2 border-rose-900">
            <div className="justify-start">
            <h2 className="text-3xl font-bold "> {customer} </h2>
             <p>{email}</p>
             <p className='font-semibold'>Service:{serviceName}</p>
            </div>
            
             <p className='font-semibold'>{review}</p>
             <div className="card-actions justify-end">
               <button  onClick={() => handleStatusUpdate(_id)}  className=" btn bg-rose-900">Edit</button>
               <button onClick={() => handleDelete(_id)} className="  btn bg-rose-900">Delete</button>
             </div>
           </div>
     </div>
        </div>
    );
};

export default MyReview2;