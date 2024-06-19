import React, { useState } from "react";
import InputText from "../../item/InputText";
import login from "../../../api/post/login";
import Cookies from "js-cookie";

const Login = () => {
  const [loading, setLoading]= useState()
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const data = {
        account,
        password,
      };
      const result = await login(data);
      if (result?.ok === true) {
        Cookies.set("accessToken", result?.accessToken);
        Cookies.set("refreshToken", result?.refreshToken);
        window.location.reload();
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  };
  return (
    <div id="login">
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
        onClick={handleSubmit}
        className="login animElement slide-right in-view"
        id="loginbtn"
      >
        Đăng nhập
      </button>
      {loading=== true && 
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
      }
      <div className="footer">
        <a className="left animElement just-show in-view">Quên mật khẩu?</a>
        <a className="right animElement just-show in-view">Đăng ký</a>
      </div>
    </div>
  );
};

export default Login;
