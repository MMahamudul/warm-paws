import React from 'react';
import { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} =use(AuthContext);
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;    
    }else{
      return <Navigate state={location.pathname} to="/auth/signin"></Navigate>  
    }
    
    
};

export default PrivateRoute;