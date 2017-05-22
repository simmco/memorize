import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.inc(0.7);
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />

    </Head>
    <style jsx global>{`
      body {
        font-family: Lato, sans-serif;          
        background: #fff;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #0288D1;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #fff, 0 0 5px #fff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
);
