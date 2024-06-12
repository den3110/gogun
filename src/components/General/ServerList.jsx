import React from "react";

const ServerList = () => {
  return (
    <div className="widget">
      <h3>DANH SÁCH MÁY CHỦ</h3>
      <div className="inner">
        <ul
          id="servers-list-container"
          className="listtag animElement slide-left time-1200 in-view"
        >
          <li>
            <a href="#">
              <span className="tag green">ON</span>Gà huyền thoại (Mới)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServerList;
