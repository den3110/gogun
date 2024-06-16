import Link from "next/link";
import React from "react";

const SlideLeft = () => {
  return (
    <div className="slideshow-container animElement slide-left in-view">
      <div className="mySlides" style={{display: "block"}}>
        <Link href="/">
          <a >
            <img src="https://gogun.vn/storage/images/SLIDE1.png" style={{ width: "100%" }} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SlideLeft;
