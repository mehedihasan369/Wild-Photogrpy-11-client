import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);

    
   const handlePlaceService = event => {
    if (user) {
      event.preventDefault();
      const form = event.target;
      const  title = form.title.value;
      const photoURL = form.photoURL.value;
      
      const description= form.description.value;
      const email = user?.email || 'unregistered';
      const name = form.name.value;
      const ratting = form.ratting.value;
      const price = form.price.value;
      
     
    
        const addService = {
       name ,
        email,
        title,
        photoURL ,
        description ,
        ratting,
        price,
        }
    
            fetch('http://localhost:5000/addServices', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addService)
              })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('A service add successfully')
                        form.reset();
                        
                    }
                })
                .catch(er => console.error(er));
                  } else {
                    alert('Login first')
                  }
                 
                }
              

  
    
    return (
        <div className='m-10'>
            <h1 className='text-3xl'>Add a service</h1>

  
            <form  onSubmit={ handlePlaceService} className='m-10  text-rose-900' >
      
      
         <input  name="name" type="text" placeholder=" Name" className="m-3 input input-ghost w-full  input-bordered" required />
        
         <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="m-3 input input-ghost w-full  input-bordered" readOnly required />
     
     <input name="title" type="text" placeholder="Service Title" className="input input-ghost w-full m-3  input-bordered" required />


     <input name="photoURL" type="text" placeholder=" photoURL" className="input input-ghost w-full m-3  input-bordered" required />
     <input name="description" type="text" placeholder="Description" className="input input-ghost m-3 w-full  input-bordered" required />


     <input name="ratting" type="text" placeholder=" Ratting" className="input input-ghost m-3 w-full  input-bordered" required />

     
     <input name="price" type="text" placeholder="price" className="input input-ghost w-full m-3  input-bordered" required />


    
        <input className='m-3 btn  bg-rose-900 rounded-none' type="submit" value="Submit" />
          </form>

 

        </div>
    );
};

export default AddService;