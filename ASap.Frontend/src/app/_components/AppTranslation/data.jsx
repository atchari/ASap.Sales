import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
import esES from "antd/locale/es_ES";
import frFR from "antd/locale/fr_FR";
import itIT from "antd/locale/it_IT";
import zhCN from "antd/locale/zh_CN";

// Define the structure for each locale object

// Define the type for the locales array
export const locales = [
  {
    label: "English",
    locale: "en-US",
    antdLocale: enUS,
    flag: "GB",
  },
  {
    label: "French",
    locale: "fr-FR",
    antdLocale: frFR,
    flag: "FR",
  },
  {
    label: "Arabic",
    locale: "ar-EG",
    antdLocale: arEG,
    flag: "SA",
  },
  {
    label: "Chinese",
    locale: "zh-CN",
    antdLocale: zhCN,
    flag: "CN",
  },
  {
    label: "Spanish",
    locale: "es-ES",
    antdLocale: esES,
    flag: "ES",
  },
  {
    label: "Italian",
    locale: "it-IT",
    antdLocale: itIT,
    flag: "IT",
  },
];
