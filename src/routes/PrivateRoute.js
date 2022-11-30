import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        console.log('yes loading found');
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

};

export default PrivateRoute;










// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

// const PrivateRoute = ({children}) => {
  


// export default PrivateRoute;