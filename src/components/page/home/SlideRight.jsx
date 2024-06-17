import Link from "next/link";
import React from "react";

const SlideRight = (props) => {
  return (
    <div className="slide-right-custom animElement slide-right in-view">
      {props?.data?.map((item, key) => (
        <div
          key={key}
          className={`item-right ${props?.tab === item?.id && "active"}`}
        >
          <Link href={item?.link}>
            <a onClick={(e)=> {e.preventDefault();props?.onClick(item?.id)}}>{item?.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SlideRight;
