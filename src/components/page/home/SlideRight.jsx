import Link from "next/link";
import React from "react";

const SlideRight = () => {
  return (
    <div className="slide-right-custom animElement slide-right in-view">
      <div className="item-right active">
        <Link href={"/"} onClick={{}}>Hướng dẫn chơi trên điện thoại !!! (HOT)</Link>
      </div>
      <div className="item-right">
        <Link href={"/"} onClick={{}}>Hướng Dẫn Nạp Thẻ !!!</Link>
      </div>
      <div className="item-right">
        <Link href={"/"} onClick={{}}>Hướng Dẫn Tân Thủ !!!</Link>
      </div>
      <div className="item-right">
        <Link href={"/"} onClick={{}}>Hội nhóm GunVip.VN (HOT)</Link>
      </div>
    </div>
  );
};

export default SlideRight;
