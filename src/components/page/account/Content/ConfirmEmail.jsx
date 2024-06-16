import React from "react";

const ConfirmEmail = () => {
  return (
    <div className="active biglist">
      <form id="createAccountForm" className="account">
        <label>
          Nhấn gửi mã sau đó kiểm tra Email của bạn (Vui lòng kiểm tra cả trong
          hộp thư spam)
        </label>
        <label>
          <span>Xác nhận Captcha (Nhập kết quả của phép tính!)</span> <br />
          <div className="wrapper-captcha">
            <input
              type="text"
              id="txtCaptcha"
              style={{ width: "200px" }}
              placeholder="Nhập chuỗi bên cạnh"
              autoComplete="off"
            />
            <img
              id="captcha_img_src"
              src="https://gogun.vn/captcha/default?IOY9KG3F"
            />
          </div>
          <div
            id="regacc_txtcode_tooltip"
            className="error-check"
            style={{ display: "none" }}
          ></div>
        </label>
        <label
          className="errors-register-form"
          style={{ display: "none", color: "red" }}
        />
        <button className="button" id="verifyEmail" type="button">
          {" "}
          <span className="icon" /> XÁC NHẬN{" "}
        </button>
      </form>
    </div>
  );
};

export default ConfirmEmail;
