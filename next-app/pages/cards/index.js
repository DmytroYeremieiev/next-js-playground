import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Cards(props) {
  console.log("props", props);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {props.cards.map((c) => (
            <Link key={c.id} href={`/cards/${c.id}`}>
              <a className={styles.card}>
                <h3>{c.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(props) {
  const cards = (
    await axios.get(`http://localhost:4000/cards?timestamp=${Date.now()}`)
  ).data.cards;
  return {
    props: {
      cards,
    },
    revalidate: 10,
  };
}
