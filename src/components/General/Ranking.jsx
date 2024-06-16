import React, { useEffect, useState } from "react";
import handleRanking from "../../api/get/ranking";

const Ranking = () => {
  const [data, setData] = useState([]);
  const [server, setServer] = useState();
  const [level, setLevel] = useState();
  useEffect(() => {
    (async () => {
      try {
        const data = {
          server,
          level,
        };
        const result = await handleRanking(data);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [server, level]);
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
          <span id="load-ranking-container" style={{ display: "block" }}>
            {data?.map((item, key) => (
              <li key={key}>
                <span className="tag green">{parseInt(key) + parseInt(1)}</span>
                <em title={item?.NickName}>{item?.NickName}</em>
                <span className="right">{item?.FightPower}</span>
              </li>
            ))}
          </span>
          <div id="loadingtop" style={{ display: "none" }}></div>
        </ul>
      </div>
    </div>
  );
};

export default Ranking;
