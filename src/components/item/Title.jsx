import React from "react";

const Title = (props) => {
  return (
    <label>
      <span {...props}>{props?.label}</span>
      <span {...props}>{props?.title}</span>
    </label>
  );
};

export default Title;
