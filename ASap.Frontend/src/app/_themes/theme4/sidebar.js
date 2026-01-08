import { mainTheme } from "./main";

export const sidebarTheme = {
  ...mainTheme,
  token: {
    ...mainTheme.token,
    colorText: "#9DDAE9",
  },
  components: {
    ...mainTheme.components,
    Layout: {
      siderBg: "#086880",
    },
    Menu: {
      itemColor: "#9DDAE9",
      itemHoverColor: "#18ffee",
      itemSelectedColor: "#18ffee",
      groupTitleColor: "rgba(255, 255, 255, 0.8)",
      radiusItem: 0,
      radiusSubMenuItem: 0,
      // menuSubMenuBg: "#086880",
      itemBg: "#086880",
      itemHoverBg: "transparent",
      itemActiveBg: "transparent",
      subMenuItemBg: "transparent",
      itemSelectedBg: "transparent",
      itemMarginInline: 0,
      controlHeightSM: 28,
      controlItemBgActive: "transparent",
      colorBgContainer: "#086880",
      colorBgElevated: "#086880",
      controlHeightLG: 42,
      marginXXS: 0,
      motionDurationMid: "0.1s",
      iconSize: 20,
      collapsedIconSize: 20,
      groupTitleFontSize: 16,
    },
  },
};
