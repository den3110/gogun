import React from "react";
import Login from "./Login";
// import ServerList from './ServerList'
import ServerList from "../../General/ServerList";
import Ranking from "../../General/Ranking";
import useAuth from "../../../context/AuthContext";
import Info from "../account/Info";
import Slide from "./Slide";
import BoxCard from "./BoxCard";
import BoxNavigation from "./BoxNavigation";

const LeftSideMobile = () => {
  const isLoggedIn = useAuth();
  return (
    <>
      <section>
        <section>
          <Slide />
          <BoxNavigation />
        </section>
      </section>
      <aside>
        <div className="d-flex" style={{ width: "100%" }}>
          <div style={{ width: "65%" }}>
            <div className="w-100">
              {isLoggedIn === true && <Info />}
              {isLoggedIn === false && <Login />}
              <ServerList />
            </div>
          </div>
          <BoxCard />
        </div>
        <Ranking />
      </aside>
    </>
  );
};

export default LeftSideMobile;
