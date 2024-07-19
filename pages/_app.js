import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "../components/Layout.js";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
