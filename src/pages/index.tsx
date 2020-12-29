import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components/button/Button";
import { Headline } from "../components/headline/Headline";
import { Slider } from "../components/slider/Slider";
import { Slide } from "../components/slider/Slide";
import { SlideDivider } from "../components/slider/SlideDivider";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [hideCover, setHideCover] = useState(false);
  const currentSlideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    currentSlideRef.current?.scrollIntoView();
  }, [currentSlideRef]);

  function handleHideCover() {
    window.setTimeout(() => {
      !hideCover && setHideCover(true);
    }, 600);
  }

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
          {!hideCover && (
            <>
              <SlideDivider prevLabel="Exterior" nextLabel="Interior" />
              <Slide
                ref={currentSlideRef}
                onLeft={handleHideCover}
              >
                <Headline>Now You!</Headline>
                <Headline as="h2">Swipe to try</Headline>

                <Button>Skip</Button>
              </Slide>
            </>
          )}
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
