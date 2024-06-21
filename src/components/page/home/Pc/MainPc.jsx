import React from "react";
import MediaQuery from "react-responsive";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";

const MainPc = () => {
  return (
    <MediaQuery minWidth={625}>
      <LeftSide />
      <RightSide />
    </MediaQuery>
  );
};

export default MainPc;
