import { Menu, Space } from "antd";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { locales } from "../../AppTranslation/data";
import { useAppTranslation } from "../../AppTranslation/hooks";
const languageOptions = locales.map((localeItem) => {
  return {
    value: localeItem.locale,
    key: localeItem.locale,
    label: (
      <Space>
        <ReactCountryFlag
          countryCode={localeItem.flag}
          style={{ fontSize: '1.2em', lineHeight: '1em' }}
          aria-label={localeItem.label}
        />
        {localeItem.label}
      </Space>
    ),
    flag: localeItem.flag,
  };
});
const TranslationSelectOption = () => {
  const { activeLocale, setActiveLocale } = useAppTranslation();
  const handlClick = React.useCallback((opt) => {
    const selectedLocale = languageOptions.find(
      (locale) => locale.key === opt.key
    );
    setActiveLocale(selectedLocale.value);
  }, []);
  return (
    <Menu
      defaultSelectedKeys={["en-US"]}
      items={languageOptions}
      selectedKeys={[activeLocale.locale]}
      onClick={handlClick}
    />
  );
};

export { TranslationSelectOption };
