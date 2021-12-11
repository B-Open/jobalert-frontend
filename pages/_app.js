import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/App.module.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
