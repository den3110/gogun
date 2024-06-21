import React from "react";

const VerifyCaptcha = (props) => {
  return (
    <label>
      <span>{props?.title}</span> <br />
      <div className="wrapper-captcha">
        <input
            {...props}
        />
        <img
          id="captcha_img_src"
          src="https://gogun.vn/captcha/default?KbnS8vYt"
        />
      </div>
      <div
        id="regacc_txtcode_tooltip"
        className="error-check"
        style={{ display: props?.display }}
      >{props?.message}</div>
    </label>
  );
};

export default VerifyCaptcha;
