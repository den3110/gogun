import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav id="menu">
        <ul className="container">
          <li>
            <Link href={"/"}>TRANG CHỦ</Link>
          </li>
          <li>
            <Link href={"/account"}>TÀI KHOẢN</Link>
          </li>
          <li>
            <Link href={"/account/5"}>NẠP TIỀN</Link>
          </li>
          <li>
            <Link href={"/account/6"}>CHUYỂN XU</Link>
          </li>
          <li>
            <Link href={"/"}>
              <a target="_blank">FANPAGE</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a target="_blank">GROUP</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
