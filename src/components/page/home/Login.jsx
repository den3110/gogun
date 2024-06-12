import React from 'react'

const Login = () => {
  return (
    <div id="login">
      <input className="animElement slide-left time-300 in-view" id="usernamelogin" placeholder="Tài khoản" autoComplete="off" type="text" />
      <input className="animElement slide-left time-300 in-view" id="passwordlogin" type="password" placeholder="Mật Khẩu" autoComplete="new-password"></input>
      <button className="login animElement slide-right in-view" id="loginbtn" type="submit">Login</button>
      <div className="footer">
        <a className="left animElement just-show in-view" href="javascript:forgetPassSection()">Quên mật khẩu?</a>
        <a className="right animElement just-show in-view" href="javascript:registerSection()">Đăng ký</a>
        </div>
    </div>
  )
}

export default Login
