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
      headerBg: "#5c6bc0",
      headerColor: "#FFF",
    },
    Menu: {
      itemColor: "#545454",
      itemHoverColor: "#64D7D6",
      itemSelectedColor: "#64D7D6",
      itemBg: "#284C7C",
      colorItemTextSelectedHorizontal: "#64D7D6",
      darkItemColor: "#FFF",
      darkItemHoverColor: "#64D7D6",
      darkItemSelectedColor: "#64D7D6",
      darkItemBg: "#284C7C",
      darkItemSelectedBg: "#284C7C",
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
