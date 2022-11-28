import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import './Home.css' ;

const Home = () => {
    return (
<div>

<div className='  banner  h-96 text-center pt-20 text-white'>
<div className='font-extrabold text-6xl'>
<h1>ADVANCED</h1>
<h1>PHOTOGRAPHY</h1>
</div>
<p className=''>"For me, the camera is a sketchbook, an instrument of intuition and spontaneity."</p>
</div>


{/* OurServices */}
<section className=' text-center'>
<div className='m-10'>
    <h1 className='font-extrabold text-6xl text-rose-900 m-10'>MY SERVICES </h1>
<div className='grid lg:grid-cols-3 gap-4'>
<Services className=''></Services>
<Services className=''></Services>
<Services className=''></Services>
</div >

 
</div>

<button className="btn rounded-none bg-rose-900 mb-10">see all</button>
</section>






</div>
    );
};

export default Home;