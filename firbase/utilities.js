import app from "./clientApp";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app)
const signup = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const signin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}
export  {signup,signin}