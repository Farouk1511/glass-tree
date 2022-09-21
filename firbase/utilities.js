import app from "./clientApp";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";

const auth = getAuth(app)
const signup = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const signin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const signout = () => {
    return signOut(auth)
} 
export  {signup,signin,auth,signout}