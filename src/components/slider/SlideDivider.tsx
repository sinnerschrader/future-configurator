import { SlideDividerProps } from "./SlideDivider.types";
import styles from "./SlideDivider.module.css";

function ArrowSVG(): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6L8.59 7.41Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SlideDivider({
  prevLabel,
  nextLabel,
  ...restProps
}: SlideDividerProps): JSX.Element {
  return (
    <div className={styles.default} {...restProps}>
      <div className={`${styles.label} ${styles.labelPrev}`}>
        <span className={styles.labelText}>{prevLabel}</span>
        <ArrowSVG />
      </div>
      <div className={`${styles.label} ${styles.labelNext}`}>
        <span className={styles.labelText}>{nextLabel}</span>
        <ArrowSVG />
      </div>
    </div>
  );
}
