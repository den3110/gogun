import Banner from "../src/components/General/Banner";
import Footer from "../src/components/General/Footer";
import Header from "../src/components/General/Header";
import Main from "../src/components/page/home/Main";

export default function Home() {
  return (
    <div className="outer">
      <Header />  
      <Banner />  
      <Main />
      <Footer />
    </div>
  );
}
