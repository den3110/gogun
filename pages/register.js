import RightSide from "../src/components/page/forgot-password/RightSide";
import LeftSide from "../src/components/page/home/LeftSide";
import LeftSideMobile from "../src/components/page/home/LeftSideMobile";
import { createMedia } from "@artsy/fresnel";

const Register = () => {
    const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
      sm: 0,
      md: 625,
      lg: 1024,
      xl: 1192,
    },
  });
  return (
    <MediaContextProvider>
        <main>
        <div className="container">
            <div className="wrap-flex">
            <Media greaterThan="md">
                <LeftSide />
            </Media>
            <Media lessThan={"md"}>
                <LeftSideMobile />
            </Media>
            <RightSide />
            </div>
        </div>
        </main>
    </MediaContextProvider>
  );
};

export default Register;
