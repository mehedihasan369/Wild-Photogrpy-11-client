import React from 'react';
import { useLoaderData } from 'react-router';

const SingleBlog = () => {
    const data = useLoaderData()
    return (
        <div>

<div className="hero h-96" style={{ backgroundImage: `url(${data.image})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-extrabold">{data.title}</h1>
      <p className="mb-5"></p>
 
    </div>
  </div>
</div>

<div>
    <h1 className='text-5xl font-bold  text-center m-5'>{data.h1}</h1>
    <p className='text-2xl font-normal  text-center m-5'> {data.description1}</p>
    <h1 className='text-5xl font-bold  text-center m-5'>{data.h2}</h1>
    <p className='text-2xl font-normal  text-center m-5'> {data.description2}</p>
</div>

           



        </div>
    );
};

export default SingleBlog;