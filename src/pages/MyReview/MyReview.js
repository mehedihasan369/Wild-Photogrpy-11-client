import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReview2 from './MyReview2';



const MyReview = () => {

  const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    console.log(user?.email)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>My Reviews {reviews.length}</h1>

           {reviews.map(data =><MyReview2 key={data._id}
           data={data}></MyReview2>)}


{/*             
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                       */}
                     
 
            
        </div>
    );
};

export default MyReview;