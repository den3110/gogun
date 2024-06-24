import React, { useContext } from "react";
import Account from "../src/components/page/account/Account";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthContext } from "../src/layouts/wrap/WrapAuth";

const Av = () => {
  const router = useRouter();
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    if (auth === false) {
      router.push("/");
    }
  }, [auth]);
  return <>{auth === true && <Account {...router.query} />}</>;
};

export default Av;
