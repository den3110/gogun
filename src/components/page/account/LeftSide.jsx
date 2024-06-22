import React, { memo } from "react";
import Info from "./Info";
import ServerList from "../../General/ServerList";
import Ranking from "../../General/Ranking";
import FanPage from "../../General/FanPage";
import MediaQuery from "react-responsive";
import RightSide from "./RightSide";

const LeftSide = (props) => {
  return (
    <aside id="account-leftside">
      <Info />
      <MediaQuery maxWidth={625}>
        <RightSide {...props} />
      </MediaQuery>
      <ServerList />
      <Ranking />
      <FanPage />
    </aside>
  );
};

export default memo(LeftSide);
