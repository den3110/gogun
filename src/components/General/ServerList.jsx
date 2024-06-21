import React, { memo, useEffect, useRef, useState } from "react";
import handleServer from "../../api/get/server";

const ServerList = () => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await handleServer();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "/background/b2.png";
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
      className="widget lm-20"
      ref={divRef}
      style={{ width: "100%", height: `${divHeight}px` }}
    >
      <div className="w-lms">
        <h3>DANH SÁCH MÁY CHỦ</h3>
      </div>
      <div className="inner">
        <ul
          id="servers-list-container"
          className="listtag animElement slide-left time-1200 in-view"
        >
          {data?.map((item, key) => (
            <li className="a-no-bg" key={key}>
              <a className="a-no-bg" href="#">
                <span className="tag green">ON</span>
                {item.ServerName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(ServerList);
