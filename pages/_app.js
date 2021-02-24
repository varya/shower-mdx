import splitbee from "@splitbee/web";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({ token: "A57MCD537OHA" });
  }, []);
  return <Component {...pageProps} />;
}

export default App;
