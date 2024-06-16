import React, { useEffect } from "react";
import LeftSide from "../../src/components/page/account/LeftSide";
import RightSide from "../../src/components/page/account/RIghtSide";
import { useRouter } from "next/router";
import useAuth from "../../src/context/AuthContext";
const PageAccount = () => {
  //   const route= us
  const router = useRouter();
  const isLoggedIn= useAuth()
  useEffect(()=> {
    if(isLoggedIn=== false) {
      router.push("/")
    }

  }, [isLoggedIn])
  return (
    <main>
      <div className="container">
        <LeftSide />
        <RightSide {...router.query} />
      </div>
    </main>
  );
};

export default PageAccount;
