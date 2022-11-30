import React from 'react';


const MyReview2 = ( {data ,handleStatusUpdate,handleDelete , status} ) => {
  
  
 const {_id ,customer,review, email,serviceName ,photoURL} = data
    return (
        <div>
    <div className="card w-auto m-2 p-2  bg-base-100 border">
           <div className="card-body ">
             <h2 className="card-title text-3xl font-bold ">  <div className="avatar ">
           <div className="w-10 rounded-full ">
          <img src= {photoURL} alt="" />
           </div>
            </div>{customer}</h2>
             <p className='font-semibold'>Service:{serviceName}</p>
             <p>{email}</p>
            
             <p className='font-semibold'>{review}</p>
             <div className="card-actions justify-end">
               <button  onClick={() => handleStatusUpdate(_id)}  className=" btn bg-rose-900">{status ? status : 'Update'}</button>
               <button onClick={() => handleDelete(_id)} className="  btn bg-rose-900">Delete</button>
             </div>
           </div>
     </div>
        </div>
    );
};

export default MyReview2;