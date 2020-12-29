import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components/button/Button";
import { Headline } from "../components/headline/Headline";
import { Slider } from "../components/slider/Slider";
import { Slide } from "../components/slider/Slide";
import { SlideDivider } from "../components/slider/SlideDivider";
import React, { useEffect } from "react";

export default function Home() {
  const startSlideRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    startSlideRef.current?.scrollIntoView()
  }, [startSlideRef])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Slider>
          <Slide>
            <Headline>Exterior</Headline>
            <Button>Skip</Button>
          </Slide>
          <SlideDivider prevLabel="Exterior" nextLabel="Interior" />
          <Slide
            ref={startSlideRef}
            onEnter={() => console.info("Enter")}
            onLeft={() => console.info("Left")}
            onSnap={() => console.info("Snap")}
          >
            <Headline>Now You!</Headline>
            <Headline>Swipe to try</Headline>

            <Button>Skip</Button>
          </Slide>
          <SlideDivider prevLabel="Exterior" nextLabel="Interior" />
          <Slide>
            <Headline>Interior</Headline>
            <Button>Skip</Button>
          </Slide>
        </Slider>
      </main>
    </div>
  );
}
