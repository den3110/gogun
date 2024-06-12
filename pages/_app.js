import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import WrapPage from "../src/layouts/wrap/WrapPage";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Go gun</title>
        <meta name="description" content="Go gun" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <WrapPage>
        <Component {...pageProps} />
      </WrapPage>
    </>
  );
}

export default MyApp;
