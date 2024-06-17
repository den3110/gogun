import React from "react";
import Account from "../src/components/page/account/Account";
import { useRouter } from "next/router";
import useAuth from "../src/context/AuthContext";
import { useEffect } from "react";

const Av = () => {
  const router = useRouter();
  const isLoggedIn = useAuth();
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/");
    }
  }, [isLoggedIn]);
  return <>{isLoggedIn === true && <Account {...router.query} />}</>;
};

export default Av;
