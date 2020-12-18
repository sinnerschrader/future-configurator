import styles from "./Headline.module.css";
import { HeadlineProps } from "./Headline.types";

export function Headline({
  as,
  children,
  size,
  ...restProps
}: React.PropsWithChildren<HeadlineProps>): JSX.Element {
  const Component = as || "h1";

  return (
    <Component
      className={styles.default}
      style={{ fontSize: `${size}px` }}
      {...restProps}
    >
      {children}
    </Component>
  );
}
