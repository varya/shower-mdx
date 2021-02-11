// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

if (typeof window !== "undefined") {
  require("@shower/core/dist/shower");
}
