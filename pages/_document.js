import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body tabIndex="0">
          <Main />
          <script type="text/javascript" src="shower.js"></script>
          <NextScript />
          {/* related to focus hack, to be removed */}
          <style jsx global>{`
            #__next {
              height: 100vh;
              width: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
