import React from "react";
import LeftSide from "../src/components/page/home/LeftSide";
import RightSide from "../src/components/page/news/RightSide";

const News = () => {
  return (
    <main>
      <div className="container">
        <div className="wrap-flex">
            <LeftSide />
            <RightSide />
        </div>
      </div>
    </main>
  );
};

export default News;
