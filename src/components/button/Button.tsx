import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";

export function Button(
  props: React.PropsWithChildren<
    {
      as: "a";
    } & Pick<ButtonProps, "href">
  >
): JSX.Element;

export function Button(
  props: React.PropsWithChildren<
    {
      as?: "button";
    } & Pick<ButtonProps, "type">
  >
): JSX.Element;

export function Button({
  as,
  children,
  ...restProps
}: React.PropsWithChildren<ButtonProps>): JSX.Element {
  const Component = as || "button";

  return (
    <Component className={styles.default} {...restProps}>
      {children}
    </Component>
  );
}
