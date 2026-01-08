import { ConfigProvider } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { AppTranslationContext } from "./AppTranslationContext";
const AppTranslation = ({ children, locales, defaultLocale }) => {
  const [activeLocale, setActiveLocale] = React.useState(defaultLocale);
  const { i18n } = useTranslation();

  const updateActiveLocale = React.useCallback((locale) => {
    const localeIndex = locales.findIndex(
      (localeItem) => localeItem.locale === locale
    );
    if (localeIndex !== -1) {
      setActiveLocale(locales[localeIndex]);
    }
  }, []);

  React.useEffect(() => {
    i18n.changeLanguage(activeLocale.locale).then(() => {});
  }, [activeLocale]);

  const contextValue = React.useMemo(
    () => ({
      activeLocale,
      setActiveLocale: updateActiveLocale,
    }),
    [activeLocale, updateActiveLocale]
  );

  return (
    <AppTranslationContext.Provider value={contextValue}>
      <ConfigProvider locale={activeLocale?.antdLocale}>
        {children}
      </ConfigProvider>
    </AppTranslationContext.Provider>
  );
};

export { AppTranslation };
