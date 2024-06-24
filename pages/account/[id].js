import React, { memo, useContext, useEffect } from "react";
import LeftSide from "../../src/components/page/account/LeftSide";
import RightSide from "../../src/components/page/account/RightSide";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";
import { AuthContext } from "../../src/layouts/wrap/WrapAuth";

const PageAccount = () => {
  //   const route= us
  const router = useRouter();
  const {auth }= useContext(AuthContext)
  useEffect(()=> {
    if(auth=== false) {
      router.push("/")
    }

  }, [auth])
  
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
