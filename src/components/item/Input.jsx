import React from "react";

const Input = (props) => {
  return (
    <label>
      <span>{props?.title}</span>
      <input
        value={props?.value}
        onChange={props?.onChange}
        type={props?.type}
        {...props}
      />
      <div
        id="usernameError"
        className="error-check"
        style={{ display: props?.display }}
      >
        <div id="formtip_inner" className="error-check-mess">{props?.message}</div>
      </div>
    </label>
  );
};

export default Input;
