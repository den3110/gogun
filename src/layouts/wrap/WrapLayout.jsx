import { useRouter } from "next/router";
import React from "react";
import WrapPage from "./WrapPage";

const WrapLayout = ({ children }) => {
  const router = useRouter();
  const getLayout = () => {
    const { pathname } = router;
    if (pathname.startsWith("/select-server")) {
      return <>{children}</>;
    }
    return <WrapPage>{children}</WrapPage>;
  };

  return getLayout();
};

export default WrapLayout;
