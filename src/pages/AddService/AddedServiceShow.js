import React, { useEffect, useState } from 'react';


const Blogs = () => {
    const [data, setData] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/addServices')
        .then(res =>res.json())
        .then(data => setData(data))
    }, []);
    
  return (
    <div>
  

<h1 className='text-3xl'> Added Service</h1>


<div className=" m-10 me-5 grid grid-cols-1 lg:grid-cols-2  gap-2">
{ data.map(data=><div className="card w-full h-60  bg-base-100 m-5 shadow-xl image-full">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description.slice(0,150)}</p>
    
 
  </div>
</div>
)}

</div>



      
    </div>
  );
};

export default Blogs;