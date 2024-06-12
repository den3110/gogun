import React from "react";
import Info from "./Info";
import ServerList from "../../General/ServerList";
import Ranking from "../../General/Ranking";
import FanPage from "../../General/FanPage";

const LeftSide = () => {
  return (
    <aside id="account-leftside">
      <Info />
      <ServerList />
      <Ranking />
      <FanPage />
    </aside>
  );
};

export default LeftSide;
