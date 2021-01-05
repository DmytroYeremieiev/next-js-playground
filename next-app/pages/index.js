import axios from "axios";
import Head from "next/head";
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
          <a className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(props) {
  const cards = (await axios.get("http://localhost:4000/cards")).cards;
  return {
    props: {
      cards,
    },
  };
}
