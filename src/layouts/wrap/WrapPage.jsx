import React from "react";
import Banner from "../../components/General/Banner";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";

const WrapPage = ({ children }) => {
  return (
    <div className="outer">
      <Header />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};

export default WrapPage;
