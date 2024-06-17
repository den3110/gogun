import Link from "next/link";
import React, { useEffect, useState } from "react";
import handleNews from "../../../api/get/news";

const BoxNavigation = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(1);
  const [page, setPage] = useState(1);
  const listNew = [
    {
      id: 1,
      title: "Tất cả",
    },
    {
      id: 2,
      title: "Thông báo",
    },
    {
      id: 3,
      title: "Tin tức",
    },
    {
      id: 4,
      title: "Sự kiện",
    },
  ];

  const handleChangeTab = (tab) => {
    setTab(tab);
  };

  const handleMore = () => {
    setPage((prev) => parseInt(prev) + parseInt(1));
  };

  const renderClassTag = (tag) => {
    switch (tag) {
      case 1:
        return "red";
      case 2:
        return "green";
      case 3:
        return "orange";
      default:
        break;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data= {
          page,
          tab
        }
        const result = await handleNews(data);
        setData(result);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [tab, page]);

  return (
    <div className="box mid">
      <div className="render01"></div>
      <div className="tabsAnchor">
        {listNew?.map((item, key) => (
          <Link key={key} href="#">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleChangeTab(item.id);
              }}
              className={`newshome ${item.id === tab && "active"}`}
            >
              {item?.title}
            </a>
          </Link>
        ))}
      </div>
      <div className="tabsContent animElement zoom-in time-300 in-view">
        <div id="tabAll" className="active" style={{ display: "inline-block" }}>
          <ul className="listtag" id="news2">
            {loading === false && data?.length <= 0 && (
              <li>Không còn bài viết nào trong mục này</li>
            )}
            {loading === false &&
              data?.length > 0 &&
              data?.map((item, key) => (
                <li key={key}>
                  <Link href={item?.link}>
                    <a>
                      {" "}
                      <>
                        <span className={`tag ${renderClassTag(item?.tag)}`}>
                          TB
                        </span>{" "}
                        {item?.title}
                      </>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
          {loading === true && (
            <div id="loadingnews" style={{ display: "block" }}>
              <center>
                <img
                  alt="Can't open"
                  src="https://gogun.vn/assets/img/loader.gif"
                />
              </center>
            </div>
          )}
          <Link href="/">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleMore();
              }}
              id="loadMore"
              className="seeall"
            >
              Xem thêm...
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxNavigation;
