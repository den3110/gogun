import React from "react";
import Banner from "../../components/General/Banner";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import MediaQuery from "react-responsive";
import BannerMobile from "../../components/General/BannerMobile";
import HeaderMobile from "../../components/General/HeaderMobile";
import { createMedia } from "@artsy/fresnel";

const WrapPage = ({ children }) => {
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
      <div className="outer">
        <MediaQuery minWidth={625}>
          <Header />
        </MediaQuery>
        <Media lessThan="md">
          <HeaderMobile />
          {/* <BannerMobile /> */}
        </Media>
        <Banner />
        {children}
        <Footer />
      </div>
    </MediaContextProvider>
  );
};

export default WrapPage;
