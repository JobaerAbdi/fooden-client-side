import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);

const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const updateName = (name)=>{
        setLoading(true)
       return updateProfile(auth.currentUser,{
            displayName : name
        })
    };

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    };

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    };

    const signInWithGithub = ()=>{
        return signInWithPopup(auth,githubProvider)
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        updateName,
        login,
        logOut,
        signInWithGoogle,
        signInWithGithub
    };


    return (
        <AuthContext.Provider value={userInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default UserContext; 