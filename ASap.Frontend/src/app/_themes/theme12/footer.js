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
      colorText: "#333",
    },
    Layout: {
      footerBg: "#848773",
      colorText: "#333",
    },
  },
};
