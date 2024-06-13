import React from "react";
import Title from "./Title";
import TabContent from "./TabContent";
import DynamicContent from "./DynamicContent";

const RightSide = () => {
  return (
    <section id="account">
      <section className="box register">
        <Title />
        <TabContent />
      </section>
      <DynamicContent />
    </section>
  );
};

export default RightSide;
