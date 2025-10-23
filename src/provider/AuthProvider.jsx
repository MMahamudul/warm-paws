import React, { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const logOut = () =>{
        return signOut(auth)
        .then(() => {
        toast.success('You Sign Out Successful');
        
        
      })
    .then(error=>toast.error(error.message))

    }

    useEffect(()=>{
        const observer = onAuthStateChanged(auth,(cur)=>{
            setUser(cur);

        });
        return ()=>{
            observer();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,

    }

    return <AuthContext value = {authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;