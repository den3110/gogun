import React, { memo, useEffect, useState } from "react";
import handleServer from "../../api/get/server";

const ServerList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await handleServer();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  return (
    <div className="widget">
      <h3>DANH SÁCH MÁY CHỦ</h3>
      <div className="inner">
        <ul
          id="servers-list-container"
          className="listtag animElement slide-left time-1200 in-view"
        >
          {
            data?.map((item, key)=> 
            <li key={key}>
              <a href="#">
                <span className="tag green">ON</span>{item.ServerName}
              </a>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default memo(ServerList);
