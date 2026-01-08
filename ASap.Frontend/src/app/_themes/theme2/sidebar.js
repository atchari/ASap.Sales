import { mainTheme } from "./main";

export const sidebarTheme = {
  ...mainTheme,
  token: {
    ...mainTheme.token,
    colorText: "#9799ac",
  },
  components: {
    ...mainTheme.components,
    Layout: {
      siderBg: "#32394F",
    },
    Menu: {
      itemColor: "#9799ac",
      itemHoverColor: "#00B378",
      itemSelectedColor: "#00B378",
      groupTitleColor: "rgba(255, 255, 255, 0.8)",
      radiusItem: 0,
      radiusSubMenuItem: 0,
      // menuSubMenuBg: "#32394F",
      itemBg: "#32394F",
      itemHoverBg: "transparent",
      itemActiveBg: "transparent",
      subMenuItemBg: "transparent",
      itemSelectedBg: "transparent",
      itemMarginInline: 0,
      controlHeightSM: 28,
      controlItemBgActive: "transparent",
      colorBgContainer: "#32394F",
      colorBgElevated: "#32394F",
      controlHeightLG: 42,
      marginXXS: 0,
      motionDurationMid: "0.1s",
      iconSize: 20,
      collapsedIconSize: 20,
      groupTitleFontSize: 16,
    },
  },
};
