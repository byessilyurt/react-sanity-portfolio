import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="nextjs, sanity, tailwind" />
        <meta name="author" content="Yusuf Yesilyurt" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yusuf Yesilyurt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
