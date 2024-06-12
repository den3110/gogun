import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Go gun</title>
        <meta
          name="description"
          content="Go gun"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
