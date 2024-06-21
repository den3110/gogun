import React from "react";
import LeftSide from "../src/components/page/home/LeftSide";
import RightSide from "../src/components/page/news/RightSide";
import MediaQuery from "react-responsive";
import LeftSideMobile from "../src/components/page/home/LeftSideMobile";

const News = () => {
  return (
    <main>
      <div className="container">
        <div className="wrap-flex">
          <MediaQuery minWidth={625}>
            <LeftSide />
          </MediaQuery>
          <MediaQuery maxWidth={625}>
            <LeftSideMobile />
          </MediaQuery>
          <RightSide />
        </div>
      </div>
    </main>
  );
};

export default News;
