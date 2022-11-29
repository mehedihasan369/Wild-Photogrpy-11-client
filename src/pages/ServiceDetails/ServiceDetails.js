import React from 'react';
import { useLoaderData } from 'react-router';
import  './ServiceDetails.css'


const ServiceDetails = () => {
   const data = useLoaderData();
   const { serviceTitle,image,rating, description,Speech1,Speech2,Speech3,Speech1Description,Speech2Description ,Speech3Description } =data
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


</div>


<div className='m-5 '>
    <h1 className='font-extrabold text-3xl'>Reviews</h1>
    <div className='border-2 h-52 border-red-900 p-4'>
        <h3 className=' text-xl'>Agdom bag doom sws sh asghw</h3>
    </div>
</div>
</section>

           
        </div>
    );
};

export default ServiceDetails;