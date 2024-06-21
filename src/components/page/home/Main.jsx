import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MediaQuery from "react-responsive";
import MainPc from "./Pc/MainPc";
import MainMobile from "./Mobile/MainMobile";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="wrap-flex">
          <MainPc />
          <MainMobile />
        </div>
      </div>
    </main>
  );
};

export default Main;
