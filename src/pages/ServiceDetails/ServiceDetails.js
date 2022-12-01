import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import  './ServiceDetails.css'


const ServiceDetails = () => {
   const data = useLoaderData();
   const {  _id , serviceTitle,image,rating, description,Speech1,Speech2,Speech3,Speech1Description,Speech2Description ,Speech3Description } =data

   const { user } = useContext(AuthContext);

   const [reviews, setReviews] = useState([])

   

   useEffect(() => {
       fetch(`https://wild-server.vercel.app/reviews?service=${_id}`)
           .then(res => res.json())
           .then(data => setReviews(data))
   }, [_id])

  

   const handlePlaceReview = event => {
    if (user) {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = user?.email || 'unregistered';
      const review = form.review.value;
      const photoURL = form.photoURL.value;
    
     console.log(name,email,review)

     const reviews = {
      service : _id,
     serviceName: serviceTitle,
    customer: name,
     email,
    review,
    photoURL
}
  
 //////////////////////////////////////
 fetch('https://wild-server.vercel.app/reviews', {
  method: 'POST',
  headers: {
      'content-type': 'application/json'
  },
  body: JSON.stringify(reviews)
})
  .then(res => res.json())
  .then(data => {
      console.log(data)
      if(data.acknowledged){
          alert('Review placed successfully')
          form.reset();
      
      }
  })
  .catch(er => console.error(er));
    } else {
      alert('Login first')
    }
   
  }



    return (
        <div>

<div className=' banner-2 text-center '>
   <img className='w-full h-96 brightness-50'  src={image} alt="" />
<div className='font-extrabold sm:px-10  text-white text-6xl title'>
<h1>{serviceTitle}</h1>
</div>
</div>

<section className='m-10 h-auto lg:grid grid-cols-3 gap-4'>
<div className=" m-5 col-span-2">
<h1 className="  text-3xl font-extrabold">{serviceTitle}</h1>
<div className="divider bg-rose-900 h-1"></div> 
<h4 className=' font-semibold'>Rating:{rating.rate} </h4>
<h3 className=' font-bold text-rose-900'>Price:$ {rating.count} </h3>
<h1><span className='font-bold'>Description :</span> {description}</h1>

<h1><span className='font-bold'>{Speech1} :</span> {Speech1Description}</h1>
<h1><span className='font-bold'>{Speech2} :</span> {Speech2Description}</h1>
<h1><span className='font-bold'>{Speech3} :</span> {Speech3Description}</h1>

<form  onSubmit={handlePlaceReview} >
      
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
     <input name="name" type="text" placeholder=" Name" className="input input-ghost w-full  input-bordered" required />
    
     <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly required />
 </div>
 <input name="review" type="text" placeholder=" Your review" className="input input-ghost w-full  input-bordered" required />
 <input name="photoURL" type="text" placeholder=" photoURL" className="input input-ghost w-full  input-bordered" required />

    <input className='btn  bg-rose-900 rounded-none' type="submit" value="Submit" />
      </form>
</div>



 






<div className='m-5 '>
    <h1 className='font-extrabold text-3xl'>Reviews</h1>
    <div className='border-2 h-auto  border-red-900 '>
        

        {reviews.map(data =><Review key={data._id}
           data={data}></Review>)}
       
    </div>
</div>
</section>

           
        </div>
    );
};

export default ServiceDetails;