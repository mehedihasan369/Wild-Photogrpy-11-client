import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReview2 from './MyReview2';



const MyReview = () => {

  const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

   

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to delete this review..');
      if (proceed) {
          fetch(`http://localhost:5000/reviews/${id}`, {
              method: 'DELETE',
              headers: {
                  authorization: `Bearer ${localStorage.getItem('genius-token')}`
              }
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                      alert('deleted successfully');
                      const remaining = reviews.filter(odr => odr._id !== id);
                      setReviews(remaining);
                  }
              })
      }
  }


//   const handleStatusUpdate = id => {
//     fetch(`http://localhost:5000/reviews/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//             authorization: `Bearer ${localStorage.getItem('genius-token')}`
//         },
//         body: JSON.stringify({ status: 'Approved' })
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.modifiedCount > 0) {
//                 const remaining = reviews.filter(odr => odr._id !== id);
//                 const approving = reviews.find(odr => odr._id === id);
//                 approving.status = 'Approved'

//                 const newReviews = [approving, ...remaining];
//                 setReviews(newReviews);
//             }
//         })
// }
    
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>My Reviews {reviews.length}</h1>
    <div className='grid lg:grid-cols-3 gap-4 '>
    {reviews.map(data =><MyReview2 key={data._id} handleDelete={handleDelete} 
           data={data}></MyReview2>)}

    </div>
           


 
            
        </div>
    );
};

export default MyReview;