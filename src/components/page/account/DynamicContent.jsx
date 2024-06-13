import React from "react";
import ChangePassword from "./Content/ChangePassword";
import ChangeEmail from "./Content/ChangeEmail";
import ChangePhoneNumber from "./Content/ChangePhoneNumber";
import Deposit from "./Content/Deposit";

const DynamicContent = () => {
  return (
    <div id="dynamicContentView">
      <section className="box register">
        <div className="title-new">
          <h1 style={{ color: "#c3332a" }}>XÁC THỰC EMAIL</h1>
        </div>
        <div className="tabsContent">
          {/* <ChangePassword /> */}
          {/* <ChangeEmail /> */}
          {/* <ChangePhoneNumber /> */}
          <Deposit />
        </div>
      </section>
    </div>
  );
};

export default DynamicContent;
