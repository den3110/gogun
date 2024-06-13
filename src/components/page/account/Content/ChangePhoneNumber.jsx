import React from "react";

const ChangePhoneNumber = () => {
  return (
    <div className="active biglist">
      <form id="changePasswordFrm" className="account">
        <label>
          <span>Số điện thoại mới</span>
          <input
            type="text"
            id="txtNewPhoneNumber"
            placeholder="Ví dụ: 0905050505"
            autoComplete="off"
            required
          />
          <div
            id="phoneError"
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
              src="https://gogun.vn/captcha/default?ec0jYWoL"
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
            id="changePhoneNumber"
            className="item"
            style={{
              backgroundColor: "rgb(245,98,0)",
              borderColor: "rgb(250,83,0)",
            }}
          >
            Thay đổi
          </a>
        </div>
        <div
          className="errorMessageAccount"
          style={{ display: "none", color: "red" }}
        />
      </form>
    </div>
  );
};

export default ChangePhoneNumber;
