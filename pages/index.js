import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner/banner";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Netflix</h1>

      <Banner
        title="Unlimited movies, TV shows, and more."
        subTitle="Watch anywhere. Cancel anytime."
        imgUrl="/static/banner.jpg"
      />
      {/* 
      <NavBar />
      <Card /> */}
    </div>
  );
}
