import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
     
  const [services, setServices] = useState([]);
    
  useEffect( () =>{
      fetch('https://wild-server.vercel.app/services')
      .then(res =>res.json())
      .then(data => setServices(data))
  }, []);
  
    return (
        <div>
                    <div className='m-10'>
           <h1 className='font-extrabold text-6xl text-rose-900 m-10'>MY SERVICES </h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
        {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
   
   </div >         


    
 
 
        </div>
        </div>
    );
};

export default Services;