import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Countdown from "react-countdown";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countdown to mental peace</title>
        <meta name="description" content="Hello there" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my peace countdown</h1>

        <div className={styles.grid}>
          <Countdown className={styles.card} date={1648792800000} autoStart />
        </div>
      </main>
    </div>
  );
};

export default Home;
