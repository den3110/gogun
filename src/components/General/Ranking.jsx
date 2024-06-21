import React, { useEffect, useRef, useState } from "react";
import handleRanking from "../../api/get/ranking";

const Ranking = () => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
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

  useEffect(() => {
    const img = new Image();
    img.src = "/background/b4.png";
    img.onload = () => {
      if (divRef.current) {
        const aspectRatio = img.height / img.width;
        const divWidth = divRef.current.clientWidth;
        setDivHeight(divWidth * aspectRatio);
      }
    };
  }, []);

  const renderArchieve = (archieve) => {
    switch (archieve) {
      case 0:
        return <img style={{ marginRight: 6 }} src="/archieve/a1.png" alt="" />;

      case 1:
        return <img style={{ marginRight: 6 }} src="/archieve/a2.png" alt="" />;
      case 2:
        return <img style={{ marginRight: 6 }} src="/archieve/a4.png" alt="" />;
      default:
        return (
          <span
            className=""
            style={{
              minWidth: 24,
              marginRight: 6,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {parseInt(archieve) + parseInt(1)}
          </span>
        );
    }
  };

  return (
    <div
      className="widget widget1"
      ref={divRef}
      style={{ width: "100%", height: `${divHeight}px` }}
    >
      <div className="w-lms">
        <h3 className="s-wak">BẢNG XẾP HẠNG</h3>
      </div>
      <div className="m-ass inner">
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
              <li className="mt-0 mb-0 l-awd" key={key}>
                {renderArchieve(key)}
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
