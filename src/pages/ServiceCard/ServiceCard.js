import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {_id, image, shortDescription, serviceTitle,rating} = service;
  return (
    <div>
          <div className="card lg:w-96 md:w-80 w-72  bg-base-100 shadow-xl rounded-none">
  <figure><img className='lg:w-96 md:w-full w-72  h-72 ' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold">{serviceTitle}</h2>
    <p className='text-lg font-medium'>{shortDescription.slice(0, 80)}</p>
    <h4 className='font-semibold'>Rating:{rating.rate} </h4>
    <h3 className='font-bold text-rose-900'>Price:$ {rating.count} </h3>
    <div className="divider bg-rose-900 h-1"></div> 
    <div className="card-actions ">
      <Link to={`/services/${_id}`} className="btn rounded-none bg-rose-900 ">View details</Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServiceCard;