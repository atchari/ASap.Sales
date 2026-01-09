import { mainTheme } from "./main";

export const sidebarTheme = {
  ...mainTheme,
  token: {
    ...mainTheme.token,
    colorText: "#AAA59A",
  },
  components: {
    ...mainTheme.components,
    Layout: {
      siderBg: "#444342",
    },
    Menu: {
      itemColor: "#AAA59A",
      itemHoverColor: "#FCB53B",
      itemSelectedColor: "#FCB53B",
      groupTitleColor: "rgba(255, 255, 255, 0.8)",
      radiusItem: 0,
      radiusSubMenuItem: 0,
      // menuSubMenuBg: "#444342",
      itemBg: "#444342",
      itemHoverBg: "transparent",
      itemActiveBg: "transparent",
      subMenuItemBg: "transparent",
      itemSelectedBg: "transparent",
      itemMarginInline: 0,
      controlHeightSM: 28,
      controlItemBgActive: "transparent",
      colorBgContainer: "#444342",
      colorBgElevated: "#444342",
      controlHeightLG: 42,
      marginXXS: 0,
      motionDurationMid: "0.1s",
    },
  },
};
