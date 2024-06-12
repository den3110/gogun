import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="logo animElement zoom-out tim-300 in-view">
      <Link href={"/"}>
        <img
          alt=""
          src={"http://gunvip.vn/assets/img/sub-header.png?ver=202303142341"}
          style={{ width: "100%", height: "auto", marginTop: -93 }}
        />
      </Link>
    </div>
  );
};

export default Banner;
