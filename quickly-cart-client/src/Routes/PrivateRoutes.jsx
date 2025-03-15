import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation().pathname;

    if(loading){
        return <p>loading.....</p>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} replace state={{from: location}}></Navigate>
};

export default PrivateRoutes;