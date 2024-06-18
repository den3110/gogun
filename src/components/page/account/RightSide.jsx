import React from "react";
import Title from "../../item/BigTitle";
import TabContent from "./TabContent";
import DynamicContent from "./DynamicContent";

const RightSide = (props) => {
  return (
    <section id="account">
      <section className="box register">
        <Title title={"TÀI KHOẢN CỦA BẠN"} {...props} />
        <TabContent />
      </section>
      {props?.id && <DynamicContent {...props} />}
    </section>
  );
};

export default RightSide;
