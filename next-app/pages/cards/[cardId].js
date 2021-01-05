import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Card(props) {
  console.log("props", props);
  const { card } = props;
  const router = useRouter();

  if (router.isFallback) {
    // router.isFallback branch is required, otherwise will get a build error
    return <p>loading......</p>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Card: </title>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a key={card.id} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths(props) {
  const paths = (
    await axios.get(`http://localhost:4000/cards?timestamp=${Date.now()}`)
  ).data.cards.map((c) => ({ params: { cardId: c.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const card = (
    await axios.get(
      `http://localhost:4000/card/${params.cardId}?timestamp=${Date.now()}`
    )
  ).data;
  return {
    props: {
      card,
    },
    revalidate: 10,
  };
}
