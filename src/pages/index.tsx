import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Button } from "../components/button/Button";
import React, { useState } from "react";
import { Video } from "../components/video/Video";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const router = useRouter();

  function handleVideoPlayed() {
    router.push("/demo");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout as="main">
        <Video
          src="media/intro_hd.mp4"
          playing={videoPlaying}
          fullSize
          onEnded={handleVideoPlayed}
        />
        {!videoPlaying && (
          <Button
            style={{ alignSelf: "center" }}
            onClick={() => {
              setVideoPlaying(!videoPlaying);
            }}
          >
            Play
          </Button>
        )}
      </Layout>
    </div>
  );
}
