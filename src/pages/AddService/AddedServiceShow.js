import React, { useEffect, useState } from 'react';


const Blogs = () => {
    const [data, setData] = useState([]);
    
    useEffect( () =>{
        fetch('https://wild-server.vercel.app/addServices')
        .then(res =>res.json())
        .then(data => setData(data))
    }, []);
    console.log(data)
    
  return (
    <div className='m-10'>
  

<h1 className='text-3xl'> Added Service</h1>


<div className=" m-10 me-5 grid grid-cols-1 lg:grid-cols-3  gap-2">
{ data.map(data=><div className="card w-96 bg-rose-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description.slice(0,150)}</p>
  </div>
  <figure><img className='h-72' src={data.photoURL} alt="Shoes" /></figure>
</div>
)}




</div>





      
    </div>
  );
};

export default Blogs;