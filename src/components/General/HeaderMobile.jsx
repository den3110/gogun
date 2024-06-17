import React from "react";

const HeaderMobile = () => {
  return (
    <>
      <div
        className="bg-header-mobile"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 9999,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo/logo.png" alt="" />
          <div>
            <div style={{ color: "white", fontSize: 18 }}>GUN HUYỀN THOẠI</div>
            <div
              className="button-download-game"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                color: "white",
              }}
            >
              TẢI GAME
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ height: 97 }}></div>
    </>
  );
};

export default HeaderMobile;
