import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.language === "ru"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ru");
  };

  return <Button onClick={changeLanguage}>{t("Язык")}</Button>;
};
