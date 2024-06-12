import Link from "next/link";
import React from "react";

const SlideLeft = () => {
  return (
    <div className="slideshow-container animElement slide-left in-view">
      <div className="mySlides fade" style={{display: "block"}}>
        <Link href="/">
          <img alt="Can't display" referrerPolicy="no-referrer" src="https://gogun.vn/storage/images/SLIDE1.png" style={{ width: "100%" }} />
        </Link>
      </div>
    </div>
  );
};

export default SlideLeft;
