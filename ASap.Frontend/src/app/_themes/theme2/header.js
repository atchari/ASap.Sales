import { mainTheme } from "./main";

export const headerTheme = {
  ...mainTheme,
  token: {
    ...mainTheme.token,
  },
  components: {
    ...mainTheme.components,
    Layout: {
      ...mainTheme.components?.Layout,
      headerBg: "#5f254c",
      headerColor: "#FFF",
    },
    Menu: {
      itemColor: "#545454",
      itemHoverColor: "#00B378",
      itemSelectedColor: "#00B378",
      itemBg: "#32394F",
      colorItemTextSelectedHorizontal: "#00B378",
      darkItemColor: "#FFF",
      darkItemHoverColor: "#00B378",
      darkItemSelectedColor: "#00B378",
      darkItemBg: "#32394F",
      darkItemSelectedBg: "#32394F",
    },
    Button: {
      colorText: "#FFF",
    },
    Dropdown: {
      colorText: "#545454",
    },
    Select: {
      controlOutline: "transparent",
    },
    Input: {
      colorTextPlaceholder: "#FFF",
      colorIcon: "#FFF",
    },
  },
};
