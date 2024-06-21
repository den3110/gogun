import React, { useEffect, useRef, useState } from "react";

const FanPage = () => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/background/b5.png";
    img.onload = () => {
      if (divRef.current) {
        const aspectRatio = img.height / img.width;
        const divWidth = divRef.current.clientWidth;
        setDivHeight(divWidth * aspectRatio);
      }
    };
  }, []);

  return (
    <div
      className="fp-widget widget"
      ref={divRef}
      style={{ width: "100%", height: `${divHeight}px` }}
    >
      <div className="w-lms">
        <h3 className="s-wak1">Fanpage</h3>
      </div>
      <center>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61557454626070&amp;tabs=timeline&amp;width=298&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
          width="240"
          height="350"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </center>
    </div>
  );
};

export default FanPage;
