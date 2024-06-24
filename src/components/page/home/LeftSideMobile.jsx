import React, { useContext } from "react";
import Login from "./Login";
// import ServerList from './ServerList'
import ServerList from "../../General/ServerList";
import Ranking from "../../General/Ranking";
import Info from "../account/Info";
import Slide from "./Slide";
import BoxCard from "./BoxCard";
import BoxNavigation from "./BoxNavigation";
import { AuthContext } from "../../../layouts/wrap/WrapAuth";

const LeftSideMobile = () => {
  const {auth } = useContext(AuthContext);
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
              {auth === true && <Info />}
              {auth === false && <Login />}
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
