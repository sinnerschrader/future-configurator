import { SlideDividerProps } from "./SlideDivider.types";
import styles from "./SlideDivider.module.css";

export function SlideDivider({
  prevLabel,
  nextLabel,
  ...restProps
}: SlideDividerProps): JSX.Element {
  return (
    <div className={styles.default} {...restProps}>
      <span className={`${styles.label} ${styles.labelPrev}`}>{prevLabel}</span>
      <span className={`${styles.label} ${styles.labelNext}`}>{nextLabel}</span>
    </div>
  );
}
