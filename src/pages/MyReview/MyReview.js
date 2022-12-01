import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReview2 from './MyReview2';



const MyReview = () => {

  const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

   

    useEffect(() => {
        fetch(`https://wild-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to delete this review..');
      if (proceed) {
          fetch(`https://wild-server.vercel.app/reviews/${id}`, {
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


  const handleStatusUpdate = (id,event )=> {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || 'unregistered';
    const review = form.review.value;
    const photoURL = form.photoURL.value;
  
   console.log(name,email,review)

   const reviews = {
  
  customer: name,
   email,
  review,
  photoURL
}


    fetch(`https://wild-server.vercel.app/reviews/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
           
        },
        body: JSON.stringify( reviews )
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = reviews.filter(odr => odr._id !== id);
                const approving = reviews.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newReviews = [approving, ...remaining];
                setReviews(newReviews);
            }
        })
}

// headers: {
//     'content-type': 'application/json'
// },
// body: JSON.stringify(reviews)
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     if(data.acknowledged){
//         alert('Review placed successfully')
//         form.reset();
    
//     }
// })
// .catch(er => console.error(er));
//   } else {
//     alert('Login first')
//   }

 
    
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>My Reviews {reviews.length}</h1>
    <div className='grid lg:grid-cols-3 gap-4 '>
    {reviews.map(data =><MyReview2 key={data._id} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}
           data={data}></MyReview2>)}

    </div>
           


 
            
        </div>
    );
};

export default MyReview;