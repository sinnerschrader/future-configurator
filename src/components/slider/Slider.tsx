import styles from "./Slider.module.css";

export function Slider({
  children,
  ...restProps
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className={styles.default} {...restProps}>
      {children}
    </div>
  );
}
