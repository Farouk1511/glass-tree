import app from "./clientApp";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";


const auth = getAuth(app)
const signup = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const signin = async (email,password) => {
    let user = await signInWithEmailAndPassword(auth,email,password)
    
    // Check if its still necessay later
    let token = await auth.currentUser.getIdToken(true)

    

    return token
}


const signout = () => {
    localStorage.removeItem('user_token')
    return signOut(auth)
} 

const getToken = () => {
    return localStorage.getItem('user_token')
}

// const authorize = async() => {
//     const decodeToken = await firebaseAdmin.auth().verifyIdToken(token)
// }
export  {signup,signin,auth,signout,getToken}