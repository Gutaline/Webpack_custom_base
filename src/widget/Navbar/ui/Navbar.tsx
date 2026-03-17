import { useTranslation } from "react-i18next";
import { ThemeToggle } from "widget/ThemeToggle";
import { LanguageSwitcher } from "widget/LanguageSwitcher";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";

import * as styles from "./Navbar.module.scss";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperLink}>
        <AppLink to={RoutePath.main}>{t("Навигация.Главная")}</AppLink>
        <AppLink to={RoutePath.about}>{t("Навигация.О нас")}</AppLink>
      </div>
      <div className={styles.right}>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
