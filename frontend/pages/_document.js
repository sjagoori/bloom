import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#FEF3CE" />

          <meta property="og:title" content="Bloom" />
          <meta
            property="og:description"
            name="Description"
            content="Bloom is an application for patients with cancer that are in remission, where they can find guidance and support from similar people. The app is intended to help people get back to their daily lives.."
          />
          <meta property="og:url" content="https://bloom-blush.vercel.app/" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
