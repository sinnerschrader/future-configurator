import { PropsWithChildren } from "react";

export interface ButtonBaseProps {
  as?: "a" | "button";
  href?: HTMLAnchorElement["href"];
  style?: React.CSSProperties
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?(event?: React.MouseEvent): void;
}

interface ButtonAnchorProps
  extends PropsWithChildren<Omit<ButtonBaseProps, "type">> {
  as: "a";
}

interface ButtonButtonProps
  extends PropsWithChildren<Omit<ButtonBaseProps, "as" | "href">> {
  as?: "button";
}

export type ButtonProps = ButtonAnchorProps | ButtonButtonProps;
