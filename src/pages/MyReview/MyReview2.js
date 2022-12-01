import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MyReview2 = ( {data ,handleStatusUpdate,handleDelete , status} ) => {
  const { user } = useContext(AuthContext);
  
  
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




              {/* The button to open modal */}
<label htmlFor="my-modal" className="btn">Edit</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update data</h3>
    <form  onSubmit={() => handleStatusUpdate(_id)} >
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
         <input name="name" type="text" placeholder=" Name" className="input input-ghost w-full  input-bordered" defaultValue={customer} required />
        
         <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly required />
     </div>
     <input name="review" type="text" placeholder=" Your review" className="input input-ghost w-full  input-bordered" defaultValue={review} required />
     <input name="photoURL" type="text" placeholder=" photoURL" className="input input-ghost w-full  input-bordered" defaultValue={photoURL} required />
    
        <input className='btn  bg-rose-900 rounded-none' type="submit" value="Submit" />
          </form>
    </div>
    <div className="modal-action">
   
      <label htmlFor="my-modal" className="btn">Cancel</label>
    </div>
  </div>





               
               <button onClick={() => handleDelete(_id)} className="  btn bg-rose-900">Delete</button>
             
             </div>
             </div>
           </div>
     </div>
        
    );
};

export default MyReview2;