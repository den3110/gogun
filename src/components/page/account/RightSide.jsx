import React from "react";
import Title from "./Title";
import TabContent from "./TabContent";

const RightSide = () => {
  return (
    <section id="account">
      <section className="box register">
        <Title />
        <TabContent />
      </section>
    </section>
  );
};

export default RightSide;
