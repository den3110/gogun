import React, { useState } from 'react'
import InputText from '../../item/InputText'
import login from '../../../api/post/login'
import Cookies from 'js-cookie'

const Login = () => {
  const [account, setAccount]= useState("")
  const [password, setPassword]= useState("")
  const handleSubmit= async (e)=> {
    e.preventDefault()
    try {
      const data= {
        account, password
      }
      const result= await login(data)
      if(result?.ok=== true) {
        Cookies.set("accessToken", result?.accessToken)
        Cookies.set("refreshToken", result?.refreshToken)
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id="login">
      <InputText value={account} onChange={(e)=> setAccount(e.target.value)} className="animElement slide-left time-300 in-view" id="usernamelogin" placeholder="Tài khoản" autoComplete="off" type="text" />
      <InputText value={password} onChange={(e)=> setPassword(e.target.value)} className="animElement slide-left time-300 in-view" id="passwordlogin" type="password" placeholder="Mật Khẩu" autoComplete="new-password" />
      <button onClick={handleSubmit} className="login animElement slide-right in-view" id="loginbtn">Login</button>
      <div className="footer">
        <a className="left animElement just-show in-view">Quên mật khẩu?</a>
        <a className="right animElement just-show in-view">Đăng ký</a>
        </div>
    </div>
  )
}

export default Login
