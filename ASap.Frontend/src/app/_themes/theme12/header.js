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
      headerBg: "#848773",
      headerColor: "#FFF",
    },
    Menu: {
      itemColor: "#545454",
      itemHoverColor: "#FCB53B",
      itemSelectedColor: "#FCB53B",
      itemBg: "#444342",
      colorItemTextSelectedHorizontal: "#FCB53B",
      darkItemColor: "#FFF",
      darkItemHoverColor: "#FCB53B",
      darkItemSelectedColor: "#FCB53B",
      darkItemBg: "#444342",
      darkItemSelectedBg: "#444342",
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
