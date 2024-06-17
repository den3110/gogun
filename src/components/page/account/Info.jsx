import React from "react";
import ButtonAccount from "../../item/ButtonAccount";
import handleLogout from "../../../api/post/logout";
import Cookies from "js-cookie";

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
            <small
              style={{
                fontSize: ".5em",
                fontFamily: '"BreeSerif"',
                display: "inline-block",
              }}
            >
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
        <ButtonAccount
          className="item animElement slide-left in-view"
          href="/account/5"
          style={{
            display: "inline-flex",
            backgroundColor: "rgb(245,98,0)",
            fontFamily: '"BreeSerif"',
            borderColor: "rgb(250,83,0)",
            justifyContent: "center",
            alignItems: "center",
          }}
          src="https://gogun.vn/assets/svgs/sync-alt.svg"
          alt="nap_tien"
          title="Nạp tiền"
        />
        <ButtonAccount
          href="/account"
          className="item animElement slide-right in-view m-flr-rm"
          style={{
            display: "inline-flex",
            textAlign: "center",
            backgroundColor: "#349517",
            fontFamily: '"BreeSerif"',
            borderColor: "#048507",
            alignItems: "center",
            float: "right",
          }}
          src="https://gogun.vn/assets/svgs/id-card.svg"
          alt=""
          title="Tài khoản"
        />
      </div>
      <div className="button-functional">
        <ButtonAccount
          href="/account"
          onClick={async (e) => {
            e.preventDefault();
           
          }}
          className="item animElement slide-right in-view"
          style={{
            display: "inline-flex",
            backgroundColor: "#4775f7",
            fontFamily: '"BreeSerif"',
            borderColor: "#4775f7",
            justifyContent: "center",
            alignItems: "center",
          }}
          src="https://gogun.vn/assets/svgs/rocket.svg"
          alt=""
          title="Launcher"
        />
        <ButtonAccount
          href="/logout"
          onClick={async (e) => {
            e.preventDefault();
            const result= await handleLogout();
            Cookies.remove("accessToken")
            Cookies.remove("refreshToken")
            window.location.reload()
          }}
          className="item animElement slide-right in-view m-flr-rm"
          style={{
            display: "inline-flex",
            textAlign: "center",
            backgroundColor: "#F28A1a",
            fontFamily: '"BreeSerif"',
            borderColor: "#F28A1a",
            alignItems: "center",
            float: "right",
          }}
          src="https://gogun.vn/assets/svgs/sign-out-alt.svg"
            alt=""
          title="Đăng xuất"
        />
      </div>
    </div>
  );
};

export default Info;
