import { forwardRef } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<any, ButtonProps>(function Button(
  { as, children, ...restProps },
  ref
) {
  const Component = as || "button";

  return (
    <Component
      ref={ref}
      className={styles.default}
      {...restProps}
    >
      {children}
    </Component>
  );
});
