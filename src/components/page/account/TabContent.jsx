import React from "react";

const TabContent = () => {
  return (
    <div className="tabsContent">
      <div className="active biglist animElement slide-left in-view">
        <form className="detail-account">
          <label style={{ paddingTop: "5px" }}>
            <span style={{ width: "25%" }}>Tên tài khoản:</span>
            <span>datistpham</span>
          </label>
          <label style={{ paddingTop: "5px" }}>
            <span style={{ width: "25%" }}>Mã tài khoản:</span>
            <span>31445</span>
          </label>
          <label>
            <span style={{ width: "25%" }}>Coin:</span>
            <span>0 Coin</span>
          </label>
          <label>
            <span style={{ width: "25%" }}>Email:</span>
            <span>datistpham@gmai.com (❌ Chưa xác thực)</span>
          </label>
          <label>
            <span style={{ width: "25%" }}>Số điện thoại:</span>
            <span>0388015984</span>
          </label>
          <label>
            <span style={{ width: "25%" }}>Trạng thái 2FA:</span>
            <span>Chưa kích hoạt</span>
          </label>
          <div className="title-new">
            <h2
              style={{
                color: "#c3332a",
                fontSize: "23.4px",
                paddingTop: "15px",
              }}
            >
              THIẾT LẬP TÀI KHOẢN{" "}
            </h2>
          </div>
          <div></div>
          <div className="button-functional-account">
            <button
              type="button"
              className="item animElement slide-left in-view"
              id="changePasswordViewCaller"
              style={{ backgroundColor: "#0dcaf0", borderColor: "#0dcaf0" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/key.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Đổi mật khẩu
            </button>
            <a
              className="item animElement slide-left in-view"
              id="changeEmailCaller"
              style={{ backgroundColor: "#198754", borderColor: "#198754" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/envelope.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Đổi email
            </a>
            <a
              className="item animElement slide-left in-view"
              id="verifyEmailCaller"
              style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/user-check.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Xác thực Email
            </a>
            <a
              className="item animElement slide-left in-view"
              id="changePhoneCaller"
              style={{ backgroundColor: "#d84949", borderColor: "#d84949" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/envelope.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Đổi SĐT
            </a>
          </div>
          <div className="title-new">
            <h2
              style={{
                color: "#c3332a",
                fontSize: "23.4px",
                paddingTop: "15px",
              }}
            >
              CHỨC NĂNG KHÁC
            </h2>
          </div>
          <div></div>
          <div className="button-functional-account">
            <a
              className="item animElement slide-left in-view"
              id="rechargeCaller"
              style={{
                backgroundColor: "rgb(245,98,0)",
                borderColor: "rgb(250,83,0)",
              }}
            >
              <img
                src="https://gogun.vn/assets/svgs/sync-alt.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Nạp Tiền
            </a>
            <a
              className="item animElement slide-left in-view"
              id="convertCoinCaller"
              style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/exchange-alt.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Chuyển xu
            </a>
            <a
              className="item animElement slide-left in-view"
              id="historyRechargeCaller"
              style={{ backgroundColor: "#343a40", borderColor: "#343a40" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/file-invoice-dollar.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Lịch sử nạp thẻ
            </a>
            <a
              className="item animElement slide-left in-view"
              id="playWithoutAuthenticateCaller"
              style={{ backgroundColor: "#3d6c9a", borderColor: "#3d6c9a" }}
            >
              <img
                src="https://gogun.vn/assets/svgs/rocket.svg"
                style={{ fill: "white" }}
                alt="nap_tien"
              />{" "}
              Link chơi game
            </a>
          </div>
          <div className="button-functional-account">
            <a
              className="item animElement slide-left in-view"
              id="changeNickNameCaller"
              style={{
                backgroundColor: "rgb(245 0 158)",
                borderColor: "rgb(245 0 158)",
              }}
            >
              <img
                src="https://gogun.vn/assets/svgs/bold.svg"
                style={{ fill: "white" }}
                alt="doi_ten"
              />{" "}
              Đổi tên
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabContent;
