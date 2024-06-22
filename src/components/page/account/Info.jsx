import React, { useEffect, useRef, useState } from "react";
import ButtonAccount from "../../item/ButtonAccount";
import handleLogout from "../../../api/post/logout";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useUser } from "../../../layouts/wrap/WrapProfile";

const Info = () => {
  const divRef = useRef(null);
  const router = useRouter();
  const [divHeight, setDivHeight] = useState(0);
  const user = useUser();
  const handleClickPlay = () => {
    router.push("/select-server");
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/background/b1.png";
    img.onload = () => {
      if (divRef.current) {
        const aspectRatio = img.height / img.width;
        const divWidth = divRef.current.clientWidth;
        setDivHeight(divWidth * aspectRatio);
      }
    };
  }, []);

  return (
    <div
      id="login"
      className="login-info"
      ref={divRef}
      style={{ width: "100%", height: `${divHeight}px` }}
    >
      <div className="clearfix">
        <div
          className="a-wka"
          style={{
            float: "left",
            maxWidth: "70%",
            lineHeight: 1,
            overflow: "hidden",
          }}
        >
          <p className="p-awer" style={{ fontSize: "35px", color: "#555" }}>
            <small
              style={{
                fontSize: ".5em",
                fontFamily: '"BreeSerif"',
                display: "inline-block",
              }}
            >
              Chào mừng Gunner
            </small>
            <span style={{ fontFamily: '"BreeSerif"' }}>{user?.username}</span>
          </p>
        </div>
        <button
          className="login animElement slide-right in-view"
          id="loginbtn"
          style={{ float: "right", fontFamily: "BreeSerif" }}
          onClick={() => handleClickPlay()}
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
          src="/icons/i1.png"
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
          src="/icons/i2.png"
          alt=""
          title="Tài khoản"
        />
      </div>
      <div className="button-functional">
        <ButtonAccount
          href="/account"
          onClick={async (e) => {
            e.preventDefault();
            // router
            router.push("/");
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
          src="/icons/i4.png"
          alt=""
          title="Launcher"
        />
        <ButtonAccount
          href="/logout"
          onClick={async (e) => {
            e.preventDefault();
            const result = await handleLogout();
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            window.location.reload();
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
          src="/icons/i5.png"
          alt=""
          title="Đăng xuất"
        />
      </div>
    </div>
  );
};

export default Info;
