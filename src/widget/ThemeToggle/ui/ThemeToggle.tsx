import clsx from "clsx";

import { Theme } from "shared/types/global";
import { useTheme } from "shared/lib/hooks/useTheme";
import { Button } from "shared/ui/Button/Button";
import IconToggle from "shared/assets/icons/toggleTheme.svg";

import * as styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={styles.btn} onClick={toggleTheme}>
      <IconToggle
        className={clsx(styles.lamp, {
          [styles.glowEffect]: theme === Theme.LIGHT,
        })}
      />
    </Button>
  );
};
