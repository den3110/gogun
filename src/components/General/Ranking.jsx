import React from "react";

const Ranking = () => {
  return (
    <div className="widget">
      <h3>BẢNG XẾP HẠNG</h3>
      <div className="inner">
        <form
          id="frm-load-ranking"
          className="filter animElement slide-top in-view"
        >
          <select name="server-id" id="serverid">
            <option value="1005">Gà huyền thoại (Mới)</option>
          </select>

          <select name="type" id="top">
            <option value="1" selected="">
              Lực Chiến
            </option>
            <option value="2">Level</option>
            <option value="3">Online</option>
            <option value="4">Hấp Dẫn</option>
            <option value="5">Tiêu xu</option>
            <option value="6">Nạp xu</option>
          </select>
        </form>
        <ul className="listtag small animElement slide-left time-600 in-view">
          <li className="head">
            <span className="tag transp">
              <i className="icon-trophy"></i>
            </span>
            <span>Nhân vật</span>
            <span className="right">Lực chiến</span>
          </li>
          <span id="load-ranking-container" style={{display: "block"}}>
            <li>
              <span className="tag green">1</span>
              <em title="TONY&nbsp;VIỆT">TONY&nbsp;VIỆT</em>
              <span className="right">5,683,115</span>
            </li>
            <li>
              <span className="tag green">2</span>
              <em title="Anh Thư">Anh Thư</em>
              <span className="right">5,333,076</span>
            </li>
            <li>
              <span className="tag green">3</span>
              <em title="J&nbsp;O&nbsp;K&nbsp;E&nbsp;R">
                J&nbsp;O&nbsp;K&nbsp;E&nbsp;R
              </em>
              <span className="right">5,319,495</span>
            </li>
            <li>
              <span className="tag green">4</span>
              <em title="Steven9999">Steven9999</em>
              <span className="right">4,929,138</span>
            </li>
            <li>
              <span className="tag green">5</span>
              <em title="CườngTiềnLẻ">CườngTiềnLẻ</em>
              <span className="right">4,827,546</span>
            </li>
            <li>
              <span className="tag green">6</span>
              <em title="Lê Hiếu">Lê Hiếu</em>
              <span className="right">4,725,150</span>
            </li>
            <li>
              <span className="tag green">7</span>
              <em title="RERRY">RERRY</em>
              <span className="right">4,268,281</span>
            </li>
            <li>
              <span className="tag green">8</span>
              <em title="TeiBaoTV">TeiBaoTV</em>
              <span className="right">3,841,430</span>
            </li>
            <li>
              <span className="tag green">9</span>
              <em title="T0p1">T0p1</em>
              <span className="right">3,800,150</span>
            </li>
            <li>
              <span className="tag green">10</span>
              <em title="3vịt">3vịt</em>
              <span className="right">3,464,925</span>
            </li>
          </span>
          <div id="loadingtop" style={{display: "none"}}></div>
        </ul>
      </div>
    </div>
  );
};

export default Ranking;
