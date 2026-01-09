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
      siderBg: "#4E5052",
    },
    Menu: {
      itemColor: "#cccccc",
      itemHoverColor: "#FF8300",
      itemSelectedColor: "#FF8300",
      groupTitleColor: "rgba(255, 255, 255, 0.8)",
      radiusItem: 0,
      radiusSubMenuItem: 0,
      // menuSubMenuBg: "#444342",
      itemBg: "#4E5052",
      itemHoverBg: "transparent",
      itemActiveBg: "transparent",
      subMenuItemBg: "transparent",
      itemSelectedBg: "transparent",
      itemMarginInline: 0,
      controlHeightSM: 28,
      controlItemBgActive: "transparent",
      colorBgContainer: "#4E5052",
      colorBgElevated: "#4E5052",
      controlHeightLG: 42,
      marginXXS: 0,
      motionDurationMid: "0.1s",
      subMenuItemSelectedColor: "#FF8300",
    },
  },
};
