import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <nav id="menu">
        <ul className="container">
            <li>
                <Link href={"/"}>TRANG CHỦ</Link>
            </li>
            <li>
                <Link href={"/av"}>TÀI KHOẢN</Link>
            </li>
            <li>
                <Link href={"/"}>NẠP TIỀN</Link>
            </li>
            <li>
                <Link href={"/"}>CHUYỂN XU</Link>
            </li>
            <li>
                <Link href={"/"}>FANPAGE</Link>
            </li>
            <li>
                <Link href={"/"}>GROUP</Link>
            </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header
