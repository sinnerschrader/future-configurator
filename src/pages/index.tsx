import Head from "next/head";
import styles from "../styles/Home.module.css";
import { basePath } from "../../next.config";
import { Button } from "../components/button/Button";
import { Headline } from "../components/headline/Headline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline>Now You!</Headline>
        <Headline>Swipe to try</Headline>

        <Button>Skip</Button>
      </main>
    </div>
  );
}
