import Link from "next/link";
import React from "react";
import BoxCard from "./BoxCard";
import MediaQuery from "react-responsive";

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
      <MediaQuery minWidth={625}>
        <BoxCard />
      </MediaQuery>
    </div>
  );
};

export default SlideRight;
