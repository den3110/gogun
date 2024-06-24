// import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import "../styles/responsive.scss";
import "../styles/template.scss";
// import WrapPage from "../src/layouts/wrap/WrapPage";
import { UserProvider } from "../src/layouts/wrap/WrapProfile";
import BottomMenu from "../src/components/General/BottomMenu";
import MediaQuery from "react-responsive";
import NProgressComponent from "../src/layouts/progress/Progress";
import WrapLayout from "../src/layouts/wrap/WrapLayout";
import { ToastContainer } from "react-toastify";
import SnackbarProvider from 'react-simple-snackbar'
import 'react-toastify/dist/ReactToastify.css';
import WrapAuth from "../src/layouts/wrap/WrapAuth";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Go gun</title>
        <meta name="description" content="Go gun" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <WrapAuth>
        <WrapLayout>
          <SnackbarProvider>
            <NProgressComponent />
            <UserProvider>
              <Component {...pageProps} />
              <MediaQuery maxWidth={625}>
                <BottomMenu />
              </MediaQuery>
              <ToastContainer/>
            </UserProvider>
          </SnackbarProvider>
        </WrapLayout>
      </WrapAuth>
    </>
  );
}

export default MyApp;
