export interface ButtonProps {
  as?: "a" | "button";
  href?: HTMLAnchorElement["href"];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?(event?: React.MouseEvent): void;
}
