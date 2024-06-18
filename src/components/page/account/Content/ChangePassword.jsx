import React, { useState } from "react";
import Input from "../../../item/Input";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [captcha, setCaptcha] = useState("");

  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset all error states
    setOldPasswordError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    setCaptchaError(false);

    let valid = true;

    if (!oldPassword) {
      setOldPasswordError(true);
      valid = false;
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      valid = false;
    }

    if (!captcha) {
      setCaptchaError(true);
      valid = false;
    }

    if (valid) {
      // Submit form logic here
    }
  };

  return (
    <div className="active biglist">
      <form id="changePasswordFrm" className="account">
        <Input
          id="txtOldPassword"
          placeholder="••••••"
          autoComplete="off"
          required
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          title="Mật khẩu cũ"
          type="password"
          display={oldPasswordError ? "block" : "none"}
          message="Vui lòng nhập mật khẩu cũ"
        />
        <Input
          id="txtNewPassword"
          type="password"
          placeholder="••••••"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Mật khẩu mới"
          display={passwordError ? "block" : "none"}
          message="Vui lòng nhập mật khẩu mới"
        />
        <Input
          type="password"
          id="txtConfirmPassword"
          placeholder="••••••"
          autoComplete="off"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          title="Xác thực mật khẩu mới"
          display={passwordConfirmError ? "block" : "none"}
          message="Mật khẩu xác thực không khớp"
        />
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
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />
            <img
              id="captcha_img_src"
              src="https://gogun.vn/captcha/default?4CHLo2zN"
            />
          </div>
          <div
            id="regacc_txtcode_tooltip"
            className="error-check"
            style={{ display: captchaError ? "block" : "none" }}
          >
            Vui lòng nhập Captcha
          </div>
        </label>
        <div onClick={handleSubmit} className="button-functional-account">
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
