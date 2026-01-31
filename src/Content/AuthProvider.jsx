import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth/cordova';
import { AuthContexts } from './AuthContexts';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ( {children}) => {

  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(true);

    //Google Sign In
    const googleSignIn=()=>{
      setLoading(true);
  return   signInWithPopup(auth, googleProvider)
    }

    // Register User
    const registerUser=(email, password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password )
    }
    // Login User
    const LoginUser=(email,password)=>{
        setLoading(true);
    return   signInWithEmailAndPassword(auth,email,password)
    }
    //signOut User
    const signOutUser=()=>{
        setLoading(true);
      return  signOut(auth)
    }
    //Forget Password
    const forgetPassword=(email)=>{
      setLoading(true);
      return sendPasswordResetEmail(auth,email);
    }
    //profile update
    const updateUserProfile=(profile)=>{
      return updateProfile(auth.currentUser,profile);
    }
    // Observe User State Change
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
      //  console.log(currentUser) 
      });
      return ()=>unsubscribe();
     
    },[])
    // Auth Info
    const authInfo={
        user,
        loading,
        registerUser,
        LoginUser,
        googleSignIn,
        signOutUser,
        forgetPassword,
        updateUserProfile
    }
    return (
        <AuthContexts value={authInfo}>
            {children}
        </AuthContexts>
    );
};

export default AuthProvider;