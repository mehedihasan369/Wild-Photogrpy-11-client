import React from 'react';

const About = () => {
    return (
        <div  className='m-10 grid lg:grid-cols-2 md:grid-cols-2 gap-4'>

<div>
<h1 className='font-extrabold text-6xl text-rose-900 m-10'>ABOUT </h1>
<h3 className='font-extrabold'> Henri Cartier-Bresson was a French humanist photographer considered a master of candid photography, and an early user of 35mm film. </h3>
<h3>He is best known for his work in fashion, photography, which often references art history and sometimes conveys social messages</h3>
<button className="btn rounded-none bg-rose-900 my-10 lg:w-28">View details</button>
</div>
<img className='lg:w-full sm:w-80' src="https://images.pexels.com/photos/305086/pexels-photo-305086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />



        </div>
    );
};

export default About;