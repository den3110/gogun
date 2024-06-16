import Link from "next/link";
import React from "react";

const ButtonAccount = (props) => {
  return (
    <Link scroll={false} href={props?.href}>
      <a className={props?.className} style={props?.style} onClick={props?.onClick}>
        <img
          src={props?.src}
          style={{ fill: "white", margin: "0 auto" }}
          alt={props?.alt}
        />{" "}
        {props?.title}
      </a>
    </Link>
  );
};

export default ButtonAccount;
