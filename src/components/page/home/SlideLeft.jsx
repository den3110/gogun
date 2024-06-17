import Link from "next/link";
import React from "react";

const SlideLeft = (props) => {
  return (
    <div className="slideshow-container animElement slide-left in-view">
      {props?.data?.map((item, key) => (
        <div key={key} className="mySlides fade1" style={{ display: props?.tab=== item?.id ? "block" : "none" }}>
          <Link href={item?.link}>
            <a>
              <img
                alt="Can't display"
                src={item?.src}
                style={{ width: "100%" }}
              />
            </a>
          </Link>
        </div>
      ))}
      <div className="dotList">
        {props?.data?.map((item, key) => (
          <span onClick={()=> props?.onClick(item?.id)} key={key} className={`dot ${props?.tab=== item?.id && "active"}`} />
        ))}
      </div>
    </div>
  );
};

export default SlideLeft;
