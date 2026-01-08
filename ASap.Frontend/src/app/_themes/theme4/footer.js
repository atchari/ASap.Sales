import { theme } from "antd";
import { mainTheme } from "./main";

export const footerTheme = {
  algorithm: [theme.defaultAlgorithm],
  ...mainTheme,
  token: {
    ...mainTheme.token,
  },
  components: {
    Typography: {
      colorText: "#FFF",
    },
    Layout: {
      footerBg: "#5c6bc0",
      colorText: "#FFF",
    },
  },
};
