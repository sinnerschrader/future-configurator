import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";

export function Button(
  props: React.PropsWithChildren<
    {
      as: "a";
    } & Omit<ButtonProps, "type">
  >
): JSX.Element;

export function Button(
  props: React.PropsWithChildren<
    {
      as?: "button";
    } &  Omit<ButtonProps, "as" | "href">
  >
): JSX.Element;

export function Button({
  as,
  children,
  onClick = () => {},
  ...restProps
}: React.PropsWithChildren<ButtonProps>): JSX.Element {
  const Component = as || "button";

  return (
    <Component className={styles.default} onClick={onClick} {...restProps}>
      {children}
    </Component>
  );
}
