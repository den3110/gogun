import React from "react";

const Info = () => {
  return (
    <div id="login">
      <div className="clearfix">
        <div
          style={{
            float: "left",
            maxWidth: "70%",
            lineHeight: 1,
            overflow: "hidden",
          }}
        >
          <p style={{ fontSize: "35px", color: "#555" }}>
            <small style={{ fontSize: ".5em", fontFamily: '"BreeSerif"', display: "inline-block"}}>
              Chào mừng Gunner
            </small>
            <span style={{ fontFamily: '"BreeSerif"' }}>datistpham</span>
          </p>
        </div>
        <button
          className="login animElement slide-right in-view"
          style={{ float: "right", fontFamily: "BreeSerif" }}
        >
          Play
        </button>
      </div>
      <div className="button-functional">
        <a
          className="item animElement slide-left in-view"
          href="https://gogun.vn/account?type=recharge"
          style={{
            display: "inline-flex",
            backgroundColor: "rgb(245,98,0)",
            fontFamily: '"BreeSerif"',
            borderColor: "rgb(250,83,0)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://gogun.vn/assets/svgs/sync-alt.svg"
            style={{ fill: "white", margin: "0 auto" }}
            alt="nap_tien"
          />{" "}
          Nạp Tiền
        </a>
        <a
          className="item animElement slide-right in-view"
          href="https://gogun.vn/account"
          style={{
            display: "inline-flex",
            textAlign: "center",
            backgroundColor: "#349517",
            fontFamily: '"BreeSerif"',
            borderColor: "#048507",
            alignItems: "center",
            float: "right",
          }}
        >
          <img
            src="https://gogun.vn/assets/svgs/id-card.svg"
            alt=""
            style={{ marginLeft: "11px", margin: "0 auto" }}
          />
          Tài Khoản
        </a>
      </div>
      <div className="button-functional">
        <a
          className="item animElement slide-left in-view"
          href="https://mega.nz/folder/e64xwJhC#PdM5QbPzAtp_V6lf6RkjwA"
          style={{
            display: "inline-flex",
            backgroundColor: "#4775f7",
            fontFamily: '"BreeSerif"',
            borderColor: "#4775f7",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://gogun.vn/assets/svgs/rocket.svg"
            alt=""
            style={{ margin: "0 auto" }}
          />{" "}
          Launcher
        </a>
        <a
          className="item animElement slide-right in-view"
          href="https://gogun.vn/account/logout"
          style={{
            display: "inline-flex",
            textAlign: "center",
            backgroundColor: "#F28A1a",
            fontFamily: '"BreeSerif"',
            borderColor: "#F28A1a",
            alignItems: "center",
            float: "right",
          }}
        >
          <img
            src="https://gogun.vn/assets/svgs/sign-out-alt.svg"
            alt=""
            style={{ marginLeft: "11px", margin: "0 auto" }}
          />
          Đăng xuất
        </a>
      </div>
    </div>
  );
};

export default Info;
