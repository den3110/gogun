import Link from "next/link";
import React from "react";

const ButtonFunctional = (props) => {
  return (
    <Link scroll={false} href={props?.href}>
      <a
        type="button"
        className="item animElement slide-left in-view"
        id="changePasswordViewCaller"
        // style={{ backgroundColor: "#0dcaf0", borderColor: "#0dcaf0" }}
        style={props?.style}
      >
        <img
          src={props?.src}
          style={{ fill: "white" }}
          alt={props?.alt}
        />{" "}
        {props?.title}
      </a>
    </Link>
  );
};

export default ButtonFunctional;
