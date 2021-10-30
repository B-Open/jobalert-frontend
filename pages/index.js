import Head from "next/head";
import HomeHero from "../components/Home/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Page from "../components/Page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>B-Open Job Alerts</title>
        <meta name="description" content="Get your job alerts here first!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Page>
        <HomeHero />
      </Page>
      <Footer />
    </div>
  );
}
