import Layout from '../layout/Layout'
import Router from "next/router";
import nProgress from "nprogress";
import SimpleReactLightbox from 'simple-react-lightbox'
import "../styles/nprogress.css";
import '../styles/globals.css'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </Layout>
  ) 
}

export default MyApp
