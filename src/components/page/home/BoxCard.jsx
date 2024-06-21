import React from "react";
import MediaQuery from "react-responsive";

const BoxCard = () => {
  return (
    <div className="cards animElement slide-bottom time-300 in-view maw-aw">
      <a href="javascript:openLauncherLink()" className="right">
        <img src="/banner/bn4.png" />
      </a>
      <a href="" className="right" download="">
        <img src="/banner/bn5.png" />
      </a>
      <MediaQuery maxWidth={625}>
        <div>
          <br />
          <br />
        </div>

        <a href="" className="right" download="">
          <img src="/banner/bn6.png" />
        </a>
      </MediaQuery>
    </div>
  );
};

export default BoxCard;
