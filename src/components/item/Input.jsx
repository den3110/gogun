import React from "react";

const Input = (props) => {
  return (
    <label>
      <span>{props?.title}</span>
      <input
        type={props?.type}
        id="txtOldPassword"
        placeholder="••••••"
        autoComplete="off"
        required
      />
      <div
        id="usernameError"
        className="error-check"
        style={{ display: "none" }}
      >
        <div id="formtip_inner" className="error-check-mess" />
      </div>
    </label>
  );
};

export default Input;
