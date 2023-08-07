import "../styles/globals.css";
import { Navbar, Footer } from "@/components/componentsindex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
