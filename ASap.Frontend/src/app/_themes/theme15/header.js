import { theme } from "antd";
import { mainTheme } from "./main";

export const headerTheme = {
  algorithm: theme.darkAlgorithm,
  ...mainTheme,
  token: {
    ...mainTheme.token,
  },
  components: {
    ...mainTheme.components,
    Layout: {
      ...mainTheme.components?.Layout,
      headerBg: "#FFF",
      headerColor: "#545454",
    },
    Menu: {
      itemColor: "#545454",
      itemHoverColor: "#fa8c15",
      itemSelectedColor: "#fa8c15",
      itemBg: "#003366",
      colorItemTextSelectedHorizontal: "#fa8c15",
      darkItemColor: "#FFF",
      darkItemHoverColor: "#fa8c15",
      darkItemSelectedColor: "#fa8c15",
      darkItemBg: "#003366",
      darkItemSelectedBg: "#003366",
    },
    Button: {
      colorText: "#545454",
    },
    Dropdown: {
      colorText: "#545454",
    },
    Select: {
      controlOutline: "transparent",
    },
  },
};
