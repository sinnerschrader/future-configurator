import useInterSectionObserver, {
  IntersectionObserverOptions,
} from "@react-hook/intersection-observer";
import React, { useEffect } from "react";
import styles from "./Slide.module.css";
import { SlideProps } from "./Slide.types";

function noop() {}

export function Slide({
  children,
  onEnter = noop,
  onLeft = noop,
  onSnap = noop,
  ...restProps
}: React.PropsWithChildren<SlideProps>): JSX.Element {
  const slideRef = React.useRef<HTMLDivElement>(null);
  // Enforcing type due to issue with thrshold type:
  // https://github.com/jaredLunde/react-hook/issues/61
  const intersection = useInterSectionObserver(slideRef, ({
    threshold: [0.01, 0.99],
    root: slideRef.current ? slideRef.current.parentElement : undefined,
  } as unknown) as IntersectionObserverOptions);

  const intersectionRatio = Math.round(intersection.intersectionRatio || 0);
  const isIntersecting = intersection.isIntersecting;

  useEffect(() => {
    if (!isIntersecting && intersectionRatio === 0) {
      onLeft();
    }

    if (isIntersecting && intersectionRatio === 0) {
      onEnter();
    }

    if (isIntersecting && intersectionRatio === 1) {
      onSnap();
    }
  }, [intersectionRatio, isIntersecting]);

  return (
    <section ref={slideRef} className={styles.default} {...restProps}>
      {children}
    </section>
  );
}
