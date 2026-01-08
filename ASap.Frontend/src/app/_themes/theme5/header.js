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
      headerBg: "#222d45",
      headerColor: "#FFF",
    },
    Menu: {
      itemColor: "#545454",
      itemHoverColor: "#00D9C9",
      itemSelectedColor: "#00D9C9",
      itemBg: "#3C3766",
      colorItemTextSelectedHorizontal: "#00D9C9",
      darkItemColor: "#FFF",
      darkItemHoverColor: "#00D9C9",
      darkItemSelectedColor: "#00D9C9",
      darkItemBg: "#3C3766",
      darkItemSelectedBg: "#3C3766",
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
