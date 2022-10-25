import React, { createContext, useState } from 'react';
import {getAuth, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {user, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;