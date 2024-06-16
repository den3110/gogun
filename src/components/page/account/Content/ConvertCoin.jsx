import React from "react";

const ConvertCoin = () => {
  return (
    <div className="active biglist">
      <form id="convertCoinFrm" className="account">
        <label>
          <span>Chọn máy chủ</span> <br />
          <select id="txtServer" name="txtServer" className="select-phoenix">
            <option value={0}>-- Chọn máy chủ --</option>
            <option value={1001}>Gà Noel</option>
            <option value={1002}>Gà Đón Xuân</option>
          </select>
        </label>
        <label>
          <span>Nhân vật</span>
          <input
            type="text"
            id="txtPlayerNickName"
            placeholder
            readOnly
            disabled
            required
          />
        </label>
        <label style={{ margin: "5px 0!important" }}>
          <div style={{ width: "100%", margin: "5px 0!important" }}>
            <div style={{ width: "49%", float: "left" }}>
              <p style={{ paddingBottom: "5px" }}>Coin chuyển</p>
              <input
                type="number"
                style={{ width: "99%" }}
                id="txtCoinConvert"
                placeholder="Nhập Coin muốn chuyện"
                autoComplete="off"
                required
              />
            </div>
            <div style={{ width: "49%", float: "left" }}>
              <p style={{ paddingBottom: "5px" }}>Xu nhận được</p>
              <input
                type="number"
                style={{ width: "99%" }}
                id="txtMoneyReceive"
                placeholder="Coin sẽ nhận được"
                readOnly
                disabled
                autoComplete="off"
                required
              />
            </div>
          </div>
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
              src="https://gogun.vn/captcha/default?W06OXGma"
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
            id="convertCoinBtn"
            className="item"
            style={{
              backgroundColor: "rgb(245,98,0)",
              borderColor: "rgb(250,83,0)",
            }}
          >
            Chuyển xu
          </a>
        </div>
        <div
          className="errors-convert-coin-form"
          style={{ display: "none", color: "red" }}
        />
      </form>
    </div>
  );
};

export default ConvertCoin;
