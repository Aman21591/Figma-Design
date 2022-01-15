import Head from "next/head";

// Styling
import "tailwindcss/tailwind.css";
import "./../styles/custom-fonts.css";

import Layout from "../components/Layout";

function _App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dukaan - Frontend Assignment</title>
        <meta
          name="description"
          content="Homepage for concept slogan generator."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default _App;
