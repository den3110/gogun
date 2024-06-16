import React from "react";

const RenameCharater = () => {
  return (
    <div className="active biglist">
      <form id="changeNickNameFrm" className="account">
        <label>
          <span>Chọn máy chủ</span> <br />
          <select id="txtServer" name="txtServer" className="select-phoenix">
            <option value={0}>-- Chọn máy chủ --</option>
            <option value={1001}>Gà Noel</option>
            <option value={1002}>Gà Đón Xuân</option>
          </select>
        </label>
        <label>
          <span>Tên nhân vật hiện tại</span>
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
              <p style={{ paddingBottom: "5px" }}>Tên nhân vật mới</p>
              <input
                type="text"
                style={{ width: "99%" }}
                id="new_nickname"
                placeholder="Nhập Tên nhân vật mới"
                autoComplete="off"
                required
              />
            </div>
            <div style={{ width: "49%", float: "left" }}>
              <p style={{ paddingBottom: "5px" }}>Phí chuyển</p>
              <input
                type="text"
                style={{ width: "99%" }}
                defaultValue="2000 Coin"
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
              src="https://gogun.vn/captcha/default?fqc4jRu4"
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
            id="changeNickName"
            className="item"
            style={{
              backgroundColor: "rgb(245,98,0)",
              borderColor: "rgb(250,83,0)",
            }}
          >
            Đổi tên ngay
          </a>
        </div>
        <div
          className="errors-change-nickname-form"
          style={{ display: "none", color: "red" }}
        />
      </form>
    </div>
  );
};

export default RenameCharater;
