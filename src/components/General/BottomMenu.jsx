import Link from "next/link";
import React from "react";

const menuItems = [
  {
    icon: "/icons/home.png",
    text: "Trang chủ",
    link: "/",
  },
  {
    icon: "/icons/news.png",
    text: "Tài khoản",
    link: "/account",
  },
  {
    icon: "/icons/recharge.png",
    text: "Nạp tiền",
    link: "/account/5",
    
  },
  {
    icon: "/icons/fanpage.png",
    text: "Fanpage",
    link: "/fanpage",
    target: "_blank"
  },
];

const BottomMenu = () => {
  return (
    <div className="bottom-menu-container">
      <div className="bottom-menu-background"></div>
      <div className="bottom-menu">
        {menuItems.map((item, index) => (
          <Link scroll={false} key={index} href={item.link}>
            <a className="menu-item" target={item.target}>
              <img src={item.icon} alt={item.text} className="menu-icon" />
              <span className="menu-text">{item.text}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;
