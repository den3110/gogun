import React from "react";

const Title = (props) => {
  return (
    <div className="title-new">
      <h1 style={{ color: "#c3332a" }}>{props?.title}</h1>
    </div>
  );
};

export default Title;
