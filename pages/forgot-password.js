import MediaQuery from "react-responsive";
import RightSide from "../src/components/page/forgot-password/RightSide";
import LeftSide from "../src/components/page/home/LeftSide";
import LeftSideMobile from "../src/components/page/home/LeftSideMobile";

const ForgotPassword = () => {
  return (
    <main>
      <div className="container">
        <div className="wrap-flex">
          <MediaQuery minWidth={625}>
            <LeftSide />
          </MediaQuery>
          <MediaQuery maxWidth={625}>
            <LeftSideMobile />
          </MediaQuery>
          <RightSide />
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
