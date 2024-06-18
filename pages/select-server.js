import Link from "next/link";
import React from "react";

const SelectServer = () => {
  return (
    <div className="wrap-select-server">
      <div className="wrapper-select-server d-flex justify-content-center align-items-center">
        <div className="frame">
          <div className="frame-top">
            <div className="frame-top-t">
              <div className="box d-flex">
                <div className="info info-l d-flex flex-column">
                  <div className="info-l-title font-weight-bold">
                    Chào mừng Gunner
                  </div>
                  <div className="info-username font-weight-bold">
                    datistpham
                  </div>
                  <div className="text-right">
                    <Link href={"/"}>
                      <a
                        className="btn-exit"
                      >
                        Thoát
                      </a>
                    </Link>
                  </div>
                  <div className="info-l-footer d-flex">
                    <div className="ml-1">
                      <Link href="/'">
                        <a className="btn-l-footer">Trang chủ</a>
                      </Link>
                    </div>
                    <div className="ml-1">
                      <Link href="/account/6">
                        <a className="btn-l-footer">Chuyển xu</a>
                      </Link>
                    </div>
                    <div className="ml-1">
                      <Link href="/fanpage">
                        <a className="btn-l-footer">Fanpage</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box box-r-link">
                <Link href="/launcher">
                  <a className="r-link">
                    <img src="https://gogun.vn/assets/img/banner-launcher.png" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="frame-top-b">
              <div className="box tb-box">
                <div>
                  <img src="https://gogun.vn/assets/img/select-server/dongnhat.png" />
                </div>
                <div>
                  <Link href="/play/1001">
                    <a className="btn-select-server btn-select-server-stable">
                      Gà Noel
                    </a>
                  </Link>
                </div>
              </div>
              <div className="box tb-box">
                <div>
                  <img src="https://gogun.vn/assets/img/select-server/dongnhat.png" />
                </div>
                <div>
                  <Link href="/play/1002">
                    <a className="btn-select-server btn-select-server-stable">
                      Gà Đón Xuân
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-bot">
            <div className="box p-3">
              <div className="box-status mb-2">
                <div className="status-bt status-bt-maintenance m-2">
                  <span className="status-badge status-maintenance" />
                  <span className="status-badge-text">Đang bảo trì</span>
                </div>
                <div className="status-bt status-bt-stable m-2">
                  <span className="status-badge status-stable" />
                  <span className="status-badge-text">Ổn định</span>
                </div>
                <div className="status-bt status-bt-coming-soon m-2">
                  <span className="status-badge status-coming-soon" />
                  <span className="status-badge-text">Sắp ra mắt</span>
                </div>
              </div>
              <div className="row m-0 p-0">
                <div className="col-6 col-sm-3 p-0 tb-box-bottom">
                  <Link href="/play/1001">
                    <a className="btn-select-server btn-select-server-stable">
                      Gà Noel
                    </a>
                  </Link>
                </div>
                <div className="col-6 col-sm-3 p-0 tb-box-bottom">
                  <Link href="/play/1002">
                    <a className="btn-select-server btn-select-server-stable">
                      Gà Đón Xuân
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectServer;
