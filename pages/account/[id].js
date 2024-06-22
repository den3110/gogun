import React, { memo, useEffect } from "react";
import LeftSide from "../../src/components/page/account/LeftSide";
import RightSide from "../../src/components/page/account/RightSide";
import { useRouter } from "next/router";
import useAuth from "../../src/context/AuthContext";
import MediaQuery from "react-responsive";
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
        <LeftSide {...router.query} />
        <MediaQuery minWidth={625}>
          <RightSide {...router.query} />
        </MediaQuery>
      </div>
    </main>
  );
};

export default memo(PageAccount);
