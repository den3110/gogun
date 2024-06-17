import React from "react";
import Banner from "../../components/General/Banner";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import MediaQuery from "react-responsive";
import BannerMobile from "../../components/General/BannerMobile";
import HeaderMobile from "../../components/General/HeaderMobile";

const WrapPage = ({ children }) => {
  return (
    <div className="outer">
      <MediaQuery minWidth={625}>
        <Header />
      </MediaQuery>
      <MediaQuery maxWidth={625}>
        <HeaderMobile />
        <BannerMobile />
      </MediaQuery>
      <Banner />
        {children}
      <Footer />
    </div>
  );
};

export default WrapPage;
