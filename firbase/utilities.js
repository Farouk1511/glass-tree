import app from "./clientApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signin = async (email, password) => {
  let user = await signInWithEmailAndPassword(auth, email, password);

  auth.onIdTokenChanged(async (user) => {
    if (user) {
      localStorage.removeItem("user_token");
      let token = await user.getIdToken(true);

      if (token) {
        localStorage.setItem("user_token", token);
      }
    }
  });

  return user;
};

const signout = () => {
  localStorage.removeItem("user_token");
  return signOut(auth);
};

const getToken = () => {
  return localStorage.getItem("user_token");
};

// const authorize = async() => {
//     const decodeToken = await firebaseAdmin.auth().verifyIdToken(token)
// }
export { signup, signin, auth, signout, getToken };
