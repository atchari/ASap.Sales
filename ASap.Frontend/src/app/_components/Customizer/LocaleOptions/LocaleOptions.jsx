import { useApp } from "@/_components/AppProvider/hooks";
import { locales } from "@/_components/AppTranslation/data";
import { useAppTranslation } from "@/_components/AppTranslation/hooks";
import { Select, Space, Switch, Typography } from "antd";
import { CustomizerCard } from "../CustomizerCard";

const languageOptions = locales.map((localeItem) => {
  return {
    value: localeItem.locale,
    label: localeItem.label,
    flag: localeItem.flag,
  };
});

const LocaleOptions = () => {
  const { direction, setDirection } = useApp();
  const { activeLocale, setActiveLocale } = useAppTranslation();
  const handleChange = () => {
    setDirection(direction === "rtl" ? "ltr" : "rtl");
  };

  const handleLanguageChange = (value) => {
    setActiveLocale(value);
  };

  return (
    <CustomizerCard title="Internationalisation">
      <div className="mb-8">
        <Typography.Paragraph className="mb-5">
          Select Locale
        </Typography.Paragraph>
        <Select
          defaultValue={activeLocale.locale}
          className="w-full"
          onChange={handleLanguageChange}
          options={languageOptions}
          placement="topLeft"
        />
      </div>
      <Space size={16}>
        <Switch checked={direction === "rtl"} onChange={handleChange} />
        <span>Switch to RTL</span>
      </Space>
    </CustomizerCard>
  );
};

export { LocaleOptions };
