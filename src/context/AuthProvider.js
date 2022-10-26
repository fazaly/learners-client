import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // change state
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            // console.log('Hello', currentUser);
            // if(currentUser === null || currentUser.emailVerified){
                
            // }
            setUser(currentUser);
            // setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // create User for email & password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with email & password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // Google Sign In
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Github Sign In
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // sign out
    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user, 
        createUser, 
        signIn, 
        updateUserProfile, 
        verifyEmail, 
        signInWithGoogle,
        signInWithGithub,
        logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;