import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components/button/Button";
import { Headline } from "../components/headline/Headline";
import { Slider } from "../components/slider/Slider";
import { Slide } from "../components/slider/Slide";
import { SlideDivider } from "../components/slider/SlideDivider";
import React, { useEffect, useRef, useState } from "react";
import { Video } from "../components/video/Video";

export default function Home() {
  const [hideCover, setHideCover] = useState(false);
  const [interiorPlaying, setInteriorPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const currentSlideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    currentSlideRef.current?.scrollIntoView();
  }, [currentSlideRef]);

  function handleHideCover() {
    window.setTimeout(() => {
      !hideCover && setHideCover(true);
    }, 600);
  }

  console.log(interiorPlaying);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Slider>
          <Slide
            onSnap={() => {
              setInteriorPlaying(true);
            }}
            onLeft={() => {
              setInteriorPlaying(false);
            }}
          >
            <Headline>Exterior</Headline>
            <Video
              src="media/sound-ext_hd.mp4"
              poster="images/sound-ext.jpg"
              playing={interiorPlaying}
              muted={videoMuted}
              fullSize
            />
            <Button>Skip</Button>
            <Button
              onClick={() => {
                setVideoMuted(!videoMuted);
              }}
            >
              {videoMuted ? "Unmute" : "Mute"}
            </Button>
          </Slide>
          {!hideCover && (
            <>
              <SlideDivider prevLabel="Exterior" nextLabel="Interior" />
              <Slide ref={currentSlideRef} onLeft={handleHideCover}>
                <Headline>Now You!</Headline>
                <Headline as="h2">Swipe to try</Headline>

                <Button>Skip</Button>
              </Slide>
            </>
          )}
          <SlideDivider prevLabel="Exterior" nextLabel="Interior" />
          <Slide>
            <Headline>Interior</Headline>
            <Video
              src="media/sound-int_hd.mp4"
              poster="images/sound-int.jpg"
              playing={false}
              muted={true}
              fullSize
            />
            <Button>Skip</Button>
          </Slide>
        </Slider>
      </main>
    </div>
  );
}
