import { theme } from "antd";
import { mainTheme } from "./main";

export const footerTheme = {
  algorithm: [theme.defaultAlgorithm],
  ...mainTheme,
  token: {
    ...mainTheme.token,
    colorBgLayout: "#FFF",
    colorText: "#545454",
  },
};
