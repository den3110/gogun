import React, { useState } from "react";
import Input from "../../item/Input";
import handleResetPassword from "../../../api/put/reset-password";
import BoxGuide from "../home/BoxGuide";
import VerifyCaptcha from "../../item/VerifyCaptcha";
import handleRegister from "../../../api/post/register";

const RightSide = () => {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [msg, setMsg] = useState("");
  const [accountMsg, setAccountMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [rePasswordMsg, setRePasswordMsg] = useState("");
  const [captchaMsg, setCaptchaMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (password !== rePassword) {
      setRePasswordMsg("Mật khẩu nhập lại không khớp");
      isValid = false;
    } else {
      setRePasswordMsg("");
    }

    if (!captcha) {
      setCaptchaMsg("Vui lòng nhập captcha");
      isValid = false;
    } else {
      setCaptchaMsg("");
    }

    if (!account) {
      setAccountMsg("Vui lòng nhập tài khoản");
      isValid = false;
    } else {
      setAccountMsg("");
    }

    if (!email) {
      setEmailMsg("Vui lòng nhập email");
      isValid = false;
    } else {
      setEmailMsg("");
    }

    if (!phone) {
      setPhoneMsg("Vui lòng nhập số điện thoại");
      isValid = false;
    } else {
      setPhoneMsg("");
    }

    if (!password) {
      setPasswordMsg("Vui lòng nhập mật khẩu");
      isValid = false;
    } else {
      setPasswordMsg("");
    }

    if (!isValid) return;

    try {
      const data = {
        account,
        email,
        phone,
        password,
        captcha,
      };
      setLoading(true);
      const result = await handleRegister(data);
      setMsg("Đăng ký thành công");
    } catch (error) {
      setMsg(error?.response?.data?.msg || "Đã có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <section className="box register">
        <div className="title-new">
          <h1 style={{ color: "#c3332a" }}>ĐĂNG KÝ TÀI KHOẢN</h1>
        </div>
        <div className="tabsContent">
          <div className="active biglist animElement slide-left in-view">
            <form id="createAccountForm" className="account" onSubmit={handleSubmit}>
              <Input
                title="Tài khoản"
                id="txtUserReg"
                placeholder="Tên tài khoản"
                autoComplete="off"
                required
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                display={accountMsg ? "block" : "none"}
                message={accountMsg}
              />
              <Input
                title="Email"
                id="txtEmailReg"
                placeholder="Ex.: abc@gmail.com"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                display={emailMsg ? "block" : "none"}
                message={emailMsg}
              />
              <Input
                title="Số điện thoại"
                id="txtPhoneReg"
                placeholder="Ex.: 0836826812"
                autoComplete="off"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                display={phoneMsg ? "block" : "none"}
                message={phoneMsg}
              />
              <Input
                title="Mật khẩu"
                type="password"
                id="txtPasswordReg"
                placeholder="• • • • • • • • • •"
                autoComplete="off"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                display={passwordMsg ? "block" : "none"}
                message={passwordMsg}
              />
              <Input
                title="Nhập Lại Mật Khẩu"
                type="password"
                id="txtRePassword-Reg"
                placeholder="• • • • • • • • • •"
                autoComplete="off"
                required
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                display={rePasswordMsg ? "block" : "none"}
                message={rePasswordMsg}
              />
              <VerifyCaptcha
                title="Xác nhận Captcha (Nhập kết quả của phép tính!)"
                type="text"
                id="txtCodeReg"
                style={{ width: "200px" }}
                placeholder="Nhập chuỗi bên cạnh"
                autoComplete="off"
                required
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                display={captchaMsg ? "block" : "none"}
                message={captchaMsg}
              />
              <label
                className="errors-register-form"
                style={{ display: msg ? "block" : "none", color: "red" }}
              >
                {msg}
              </label>
              <button className="button" id="register" type="submit" disabled={loading}>
                {loading ? "Đang xử lý..." : "ĐĂNG KÝ"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <BoxGuide />
    </section>
  );
};

export default RightSide;
