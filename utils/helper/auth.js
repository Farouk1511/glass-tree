import { getAuth } from "firebase/auth";
import React, { createContext, useEffect, useState, useContext } from "react";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
import clientApp from "../../firbase/clientApp";

// https://colinhacks.com/essays/nextjs-firebase-authentication
const auth = getAuth(clientApp);
const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      console.log(`token changed`);

      if (!user) {
        console.log(`no token found`);
        setUser(null);
        //local storage
        deleteCookie("token");
        setCookie("token", null);
      }

      console.log(`updating token...`);
      const token = await user?.getIdToken();

      const result = await fetch(`/api/user/read/${user?.uid}`, {
        method: "GET",
      });

      const userFrmDB = await result.json();

      console.log(userFrmDB);

      setUser({
        uid: user?.uid,
        name: userFrmDB.user?.name,
        _id: userFrmDB.user?._id,
      });
      //localStorage
      deleteCookie("token");
      setCookie("token", token);
      // console.log(getCookie('token'))
    });
  }, []);

  //forces refresh the token every 10minutes

  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
