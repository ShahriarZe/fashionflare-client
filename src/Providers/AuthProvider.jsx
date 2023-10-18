/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const createUSer = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authentications = {
        googleSignIn,
        createUSer
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;