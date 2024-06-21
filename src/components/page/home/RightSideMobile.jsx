import React from "react";
import BoxGuide from "./BoxGuide";
import BoxItem from "./BoxItem";
import FanPage from "../../General/FanPage";

const RightSideMobile = () => {
  return (
    <section>
      <section>
        <BoxGuide />
        <BoxItem />
      </section>
      <aside>
        <FanPage />
      </aside>
    </section>
  );
};

export default RightSideMobile;
