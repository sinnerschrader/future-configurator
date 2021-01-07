import React, { ReactHTML, ReactHTMLElement } from "react";
import styles from "./Layout.module.css";

export function Layout({
  as = "div",
  children,
  ...restProps
}: React.PropsWithChildren<{ as?: any }>): JSX.Element {
  const Component = as;
  return (
    <Component className={styles.default} {...restProps}>
      {children}
    </Component>
  );
}
