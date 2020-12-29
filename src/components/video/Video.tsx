import styles from "./Video.module.css";
import config from "../../../next.config.js";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { VideoProps } from "./Video.types";
import { useRef } from "react";

export function Video({
  fullSize = false,
  playing = false,
  ...restProps
}: VideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (videoRef.current) {
    playing ? videoRef.current.play() : videoRef.current.pause();
  }

  const classNames = [styles.default]
  fullSize && classNames.push(styles.fullSize)

  return (
    <video
      ref={videoRef}
      className={classNames.join(' ')}
      src={`${config.basePath}/earth.mp4`}
      poster={`${config.basePath}/earth.jpg`}
      preload="metadata"
      playsInline
      muted
      {...restProps}
    ></video>
  );
}
