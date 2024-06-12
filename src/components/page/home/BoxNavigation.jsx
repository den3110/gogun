import Link from "next/link";
import React from "react";

const BoxNavigation = () => {
  return (
    <div className="box mid">
      <div className="render01"></div>
      <div className="tabsAnchor">
        <Link href="#All" id="all-news" className="newshome active">
          <a id="all-news" className="newshome active">
            Tất cả
          </a>
        </Link>
        <Link href="#Announces">
          <a id="announ-news" className="newshome">
            THÔNG BÁO
          </a>
        </Link>
        <Link href="#News">
          <a id="new-news" className="newshome">
            TIN TỨC
          </a>
        </Link>
        <Link href="#Events">
          <a id="event-news" className="newshome">
            SỰ KIỆN
          </a>
        </Link>
      </div>
      <div className="tabsContent animElement zoom-in time-300 in-view">
        <div id="tabAll" className="active" style={{ display: "inline-block" }}>
          <ul className="listtag" id="news2">
            <li>Không còn bài viết nào trong mục này</li>
          </ul>
          <div id="loadingnews" style={{ display: "none" }}>
            <center>
              <img
                alt="Can't open"
                src="https://gogun.vn/assets/img/loader.gif"
              />
            </center>
          </div>
          <Link href="/">
            <a id="loadMore" className="seeall">
              Xem thêm...
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxNavigation;
