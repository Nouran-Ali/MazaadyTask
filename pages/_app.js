import "@/styles/globals.css";
import Layout from "./../comps/Layout";
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  return <>

    <Head>
      <title>Mazaady</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="../logo2.png" />
    </Head>

    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  </>;
}
