import Link from "next/link";
import React from "react";
import Title from "../../item/Title";
import ButtonFunctional from "../../item/ButtonFunctional";

const TabContent = () => {
  return (
    <div className="tabsContent">
      <div className="active biglist animElement slide-left in-view">
        <form className="detail-account">
          <Title label={"Tên tài khoản:"} title={"datistpham@gmail.com"} />
          <Title label={"Mã tài khoản:"} title={"31445"} />
          <Title label={"Coin:"} title={"31445"} />
          <Title
            label={"Email:"}
            title={"datistpham@gmai.com (❌ Chưa xác thực)"}
          />
          <Title label={"Mã tài khoản:"} title={"0 Coin"} />
          <Title label={"Số điện thoại:"} title={"0388012984"} />
          <Title label={"Trạng thái 2FA:"} title={"Chưa kích hoạt"} />
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
            <ButtonFunctional
              href={"/account/1"}
              style={{ backgroundColor: "#0dcaf0", borderColor: "#0dcaf0" }}
              type="button"
              id="changePasswordViewCaller"
              src="https://gogun.vn/assets/svgs/key.svg"
              alt="nap_tien"
              className="item animElement slide-left in-view"
              title="Đổi mật khẩu"
            />
            <ButtonFunctional
              href={"/account/2"}
              id="changeEmailCaller"
              className="item animElement slide-left in-view"
              style={{ backgroundColor: "#198754", borderColor: "#198754" }}
              src="https://gogun.vn/assets/svgs/envelope.svg"
              alt="nap_tien"
              title="Đổi email"
            />
            <ButtonFunctional
              href={"/account/3"}
              className="item animElement slide-left in-view"
              id="verifyEmailCaller"
              style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}
              src="https://gogun.vn/assets/svgs/user-check.svg"
              alt="nap_tien"
              title="Xác thực Email"
            />
            <ButtonFunctional
              href={"/account/4"}
              className="item animElement slide-left in-view"
              id="changePhoneCaller"
              style={{ backgroundColor: "#d84949", borderColor: "#d84949" }}
              src="https://gogun.vn/assets/svgs/envelope.svg"
              alt="nap_tien"
              title="Đổi SĐT"
            />
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
            <ButtonFunctional
              href={"/account/5"}
              className="item animElement slide-left in-view"
              id="rechargeCaller"
              style={{
                backgroundColor: "rgb(245,98,0)",
                borderColor: "rgb(250,83,0)",
              }}
              src="https://gogun.vn/assets/svgs/sync-alt.svg"
              alt="nap_tien"
              title="Nạp Tiền"
            />
            <ButtonFunctional
              href={"/account/6"}
              className="item animElement slide-left in-view"
              id="convertCoinCaller"
              style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
              src="https://gogun.vn/assets/svgs/exchange-alt.svg"
              alt="nap_tien"
              title="Chuyển xu"
            />
            <ButtonFunctional
              href={"/account/7"}
              className="item animElement slide-left in-view"
              id="historyRechargeCaller"
              style={{ backgroundColor: "#343a40", borderColor: "#343a40" }}
              src="https://gogun.vn/assets/svgs/file-invoice-dollar.svg"
              alt="nap_tien"
              title="Lịch sử nạp thẻ"
            />
            <ButtonFunctional
              href={"/account/8"}
              className="item animElement slide-left in-view"
              id="playWithoutAuthenticateCaller"
              style={{ backgroundColor: "#3d6c9a", borderColor: "#3d6c9a" }}
              src="https://gogun.vn/assets/svgs/rocket.svg"
              alt="nap_tien"
              title="Link chơi game"
            />
          </div>
          <div className="button-functional-account">
            <ButtonFunctional
              href={"/account/9"}
              className="item animElement slide-left in-view"
              id="changeNickNameCaller"
              style={{
                backgroundColor: "rgb(245 0 158)",
                borderColor: "rgb(245 0 158)",
              }}
              src="https://gogun.vn/assets/svgs/bold.svg"
              alt="doi_ten"
              title="Đổi tên"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabContent;
