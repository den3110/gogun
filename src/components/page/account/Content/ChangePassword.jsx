import React from "react";

const ChangePassword = () => {
  return (
    <div className="active biglist">
      <form id="changePasswordFrm" className="account">
        <label>
          <span>Mật khẩu cũ</span>
          <input
            type="password"
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
        <label>
          <span>Mật khẩu mới</span>
          <input
            id="txtNewPassword"
            type="password"
            placeholder="••••••"
            autoComplete="off"
            required
          />
          <div
            id="emailError"
            className="error-check"
            style={{ display: "none" }}
          />
        </label>
        <label>
          <span>Xác nhận mật khẩu mới</span>
          <input
            type="password"
            id="txtConfirmPassword"
            placeholder="••••••"
            autoComplete="off"
            required
          />
          <div
            id="regacc_passs_tooltip"
            className="error-check"
            style={{ display: "none" }}
          />
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
              required
            />
            <img
              id="captcha_img_src"
              src="https://gogun.vn/captcha/default?4CHLo2zN"
            />
          </div>
          <div
            id="regacc_txtcode_tooltip"
            className="error-check"
            style={{ display: "none" }}
          ></div>
        </label>
        <div className="button-functional-account">
          <a
            id="changePasswordBtn"
            className="item"
            style={{
              backgroundColor: "rgb(245,98,0)",
              borderColor: "rgb(250,83,0)",
            }}
          >
            Thay đổi mật khẩu
          </a>
        </div>
        <div
          className="errors-change-password-form"
          style={{ display: "none", color: "red" }}
        />
      </form>
    </div>
  );
};

export default ChangePassword;
