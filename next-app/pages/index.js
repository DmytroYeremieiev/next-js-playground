import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log("props", props);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/cards">
            <a className={styles.card}>
              <h3>Cards</h3>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
