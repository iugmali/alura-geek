import type { AppProps } from 'next/app'
import Head from "next/head";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
