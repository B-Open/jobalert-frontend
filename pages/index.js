import Head from "next/head";
import HomeHero from "../components/Home/Hero";
import Page from "../components/Page";

export default function Home() {
  return (
    <>
      <Head>
        <title>B-Open Job Alerts</title>
        <meta name="description" content="Get your job alerts here first!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <HomeHero />
      </Page>
    </>
  );
}
