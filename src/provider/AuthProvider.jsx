import React, { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';
import toast from 'react-hot-toast';



export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const logOut = () =>{
        return signOut(auth)
        .then(() => {
        toast.success('You Sign Out Successful');
        
        
        
      })
    .then(error=>toast.error(error.message))

    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);

    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const passwordReset = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const observer = onAuthStateChanged(auth,(cur)=>{
            setUser(cur);
            setLoading(false);

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
        logIn,
        loading, 
        setLoading,
        updateUser,
        googleSignIn,
        passwordReset,

    }

    return <AuthContext value = {authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;