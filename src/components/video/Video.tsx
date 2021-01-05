import styles from "./Video.module.css";
import config from "../../../next.config.js";
import { VideoProps } from "./Video.types";
import { useRef } from "react";

export function Video({
  src,
  fullSize = false,
  muted = false,
  playing = false,
  poster,
  ...restProps
}: VideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (videoRef.current) {
    playing ? videoRef.current.play() : videoRef.current.pause();
  }

  const classNames = [styles.default];
  fullSize && classNames.push(styles.fullSize);

  return (
    <video
      ref={videoRef}
      className={classNames.join(" ")}
      src={`${config.basePath}/${src}`}
      poster={`${config.basePath}/${poster}`}
      preload="metadata"
      playsInline
      muted={muted}
      {...restProps}
    />
  );
}
