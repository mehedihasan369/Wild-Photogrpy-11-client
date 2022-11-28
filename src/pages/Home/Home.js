import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import About from './About/About';
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
<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
<Services className=''></Services>
<Services className=''></Services>
<Services className=''></Services>
</div >

 
</div>

<button className="btn rounded-none bg-rose-900 mb-10">see all</button>
</section>

<About></About>

<section className='text-center'>
<div className='m-10'>
    <h1 className='font-extrabold text-6xl text-rose-900 '>PHOTOGRAPHY </h1>
    <div className="divider bg-rose-900 h-1"></div>
<div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 lg:mx-32  mt-5'>
<img className='lg:w-96 lg:h-72 w-72' src="https://images.pexels.com/photos/1130434/pexels-photo-1130434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<img className='lg:w-96 lg:h-72 w-72' src="https://images.pexels.com/photos/312826/pexels-photo-312826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<img className='lg:w-96 lg:h-72 w-72' src="https://images.pexels.com/photos/459198/pexels-photo-459198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<img className='lg:w-96 lg:h-72 w-72' src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
</div >

 
</div>

<button className="btn rounded-none bg-rose-900 mb-10">see all</button>
</section>


</div>
    );
};

export default Home;