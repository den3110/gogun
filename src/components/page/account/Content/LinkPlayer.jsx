import React from "react";

const LinkPlayer = () => {
  return (
    <div className="active biglist">
      <label>
        {" "}
        Với link chơi game này, bạn có thể chơi game mà không cần đăng nhập!
      </label>
      <form id="changeLinkPlayFrm" className="account">
        <label>
          <span>Link chơi game hiện tại</span>
          <input
            type="text"
            id="linkPlayGame"
            defaultValue="https://gogun.vn/select-server-free/31445ylZzazXL0fCYLJ49idRr5fDQALSbIWSO10yCyLSixQJBoeZjv8iR3SftCcaP1Wg5JsW2YdKQuPCGwQLl"
            autoComplete="off"
            readOnly
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
              src="https://gogun.vn/captcha/default?gYSfvm3R"
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
            id="changeLinkPlay"
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

export default LinkPlayer;
