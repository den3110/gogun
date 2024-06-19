import React from "react";

const FanPage = () => {
  return (
    <div className="fp-widget widget">
      <div className="w-lms">
        <h3 className="s-wak1">Fanpage</h3>
      </div>
      <center>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=61557454626070&amp;tabs=timeline&amp;width=298&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
          width="240"
          height="350"
          style={{border: "none", overflow: "hidden"}}
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
