import type { AppProps } from 'next/app'
import Head from "next/head";
import Script from "next/script";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alura Geek</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            console.log('built');
                        `
          }}
        />
      </Head>
      <Script src="https://polyfill.io/v3/polyfill.min.js" strategy="beforeInteractive" />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
