import React, { useEffect, useRef, useState } from "react";
import InputText from "../../item/InputText";
import login from "../../../api/post/login";
import { useRouter } from "next/router";

const Login = () => {
  const divRef = useRef(null);
  const router = useRouter();
  const [divHeight, setDivHeight] = useState(0);

  const [loading, setLoading] = useState();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        account,
        password,
      };
      const result = await login(data);
      if (result?.ok === true) {
        localStorage.setItem("accessToken", result?.accessToken);
        localStorage.setItem("refreshToken", result?.refreshToken);
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
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
    <form
      id="login"
      ref={divRef}
      style={{ width: "100%", height: `${divHeight}px` }}
    >
      <InputText
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        className="animElement slide-left time-300 in-view"
        id="usernamelogin"
        placeholder="Tài khoản"
        autoComplete="off"
        type="text"
      />
      <InputText
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="animElement slide-left time-300 in-view"
        id="passwordlogin"
        type="password"
        placeholder="Mật Khẩu"
        autoComplete="new-password"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="login animElement slide-right in-view"
        id="loginbtn"
      >
        Đăng nhập
      </button>
      {loading === true && (
        <div
          className="footer"
          id="sign-in-error"
          style={{
            textAlign: "center",
            fontFamily: "BreeSerif",
            color: "rgb(255, 112, 4)",
          }}
        >
          <img
            src="https://gogun.vn/assets/img/loader.gif"
            style={{ width: "26px", height: "26px" }}
          />
          <p style={{ fontWeight: "bold" }}> Đang đăng nhập, vui lòng đợi...</p>
        </div>
      )}
      <div className="footer">
        <a
          onClick={() => {
            router.push("/forgot-password");
          }}
          className="left animElement just-show in-view cursor-pointer"
        >
          Quên mật khẩu?
        </a>
        <a
          onClick={() => {
            router.push("/register");
          }}
          className="right animElement just-show in-view cursor-pointer"
        >
          Đăng ký
        </a>
      </div>
    </form>
  );
};

export default Login;
