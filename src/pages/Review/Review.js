import React from 'react';

const Review = ({data}) => {
  const {customer,review,serviceName} =data
    return (
        <div>
    <div className="card w-auto m-2 p-2  bg-base-100 border">
           <div className="card-body ">
             <h2 className="card-title text-3xl font-bold ">  <div className="avatar ">
           <div className="w-10 rounded-full ">
             <img src="https://placeimg.com/192/192/people" />
           </div>
            </div>{customer}</h2>
             <p className='font-semibold'>Service:{serviceName}</p>
             <p className='font-semibold'>{review}</p>
             <div className="card-actions justify-end">
             </div>
           </div>
           <div className="divider bg-rose-900 h-1"></div> 
     </div>

    
        </div>
    );
};

export default Review;