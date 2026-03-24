import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";
import * as styles from "./Button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = ButtonTheme.PRIMARY,
  children,
  ...other
}) => {
  return (
    <button className={clsx(styles.btn, styles[theme], className)} {...other}>
      {children}
    </button>
  );
};
