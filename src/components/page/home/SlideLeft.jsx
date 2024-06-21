import Link from "next/link";
import React from "react";
import MediaQuery from "react-responsive";

const SlideLeft = (props) => {
  return (
    <>
      <MediaQuery maxWidth={625}>
        <div style={{ width: "100%", overflowX: "auto" }}>
          <div className="d-flex align-items-end">
            {props?.data?.map((item, key) => (
              <span
                className={`m-lis-a ${props?.tab === item?.id && "active"}`}
                onClick={() => props?.onClick(item?.id)}
                key={key}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </MediaQuery>
      <div className="slideshow-container animElement slide-left in-view">
        {props?.data?.map((item, key) => (
          <div
            key={key}
            className="mySlides fade1"
            style={{ display: props?.tab === item?.id ? "block" : "none" }}
          >
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
            <span
              onClick={() => props?.onClick(item?.id)}
              key={key}
              className={`dot ${props?.tab === item?.id && "active"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SlideLeft;
