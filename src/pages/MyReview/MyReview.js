import React from 'react';
import Review from '../Review/Review';

const MyReview = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>My Reviews</h1>


    <div className="card w-auto m-10 p-5  bg-base-100 border">
           <div className="card-body border-2 border-sky-500">
             <h2 className="card-title text-3xl font-bold ">  <div className="avatar ">
           <div className="w-10 rounded-full ">
             <img src="https://placeimg.com/192/192/people" />
           </div>
            </div>name</h2>
             <p className='font-semibold'>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
               <button className=" btn bg-rose-900">Edit</button>
               <button className="  btn bg-rose-900">Delete</button>
             </div>
           </div>
     </div>
                     
 
            
        </div>
    );
};

export default MyReview;