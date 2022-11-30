import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
 const data = useLoaderData()
  return (
    <div>
      <div className="hero h-96" style={{ backgroundImage: `url("https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-extrabold">Blogs</h1>
      <p className="mb-5"></p>
 
    </div>
  </div>
</div>




<div className=" m-10 me-5 grid grid-cols-1 lg:grid-cols-2  gap-2">
{ data.map(data=><div className="card w-full h-60  bg-base-100 m-5 shadow-xl image-full">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description1.slice(0,150)}</p>
    
    <div className="card-actions justify-end">
    <Link className='btn btn-active btn-secondary' to={`/blogs/${data._id}`} >Read it</Link>
    </div>
  </div>
</div>
)}

</div>



      
    </div>
  );
};

export default Blogs;