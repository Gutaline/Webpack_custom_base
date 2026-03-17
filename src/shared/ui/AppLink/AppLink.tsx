import clsx from "clsx";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import * as styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...other
}) => {
  return (
    <Link
      to={to}
      className={clsx(styles.link, styles[theme], className)}
      {...other}
    >
      {children}
    </Link>
  );
};
