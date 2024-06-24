import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import WrapPage from "./WrapPage";
import useAuth from "../../context/AuthContext";

export const AuthContext = createContext();
const WrapAuth = ({ children }) => {
  const [auth, setAuth] = useState();
  const isLoggedIn = useAuth();
  useEffect(() => {
    setAuth(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{auth}}>
        {children}
    </AuthContext.Provider>
  )
};

export default WrapAuth;
