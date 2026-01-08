import { mainTheme } from "./main";

export const sidebarTheme = {
  ...mainTheme,
  token: {
    ...mainTheme.token,
    colorText: "#878BAB",
  },
  components: {
    ...mainTheme.components,
    Layout: {
      siderBg: "#3C3766",
    },
    Menu: {
      itemColor: "#878BAB",
      itemHoverColor: "#00D9C9",
      itemSelectedColor: "#00D9C9",
      groupTitleColor: "rgba(255, 255, 255, 0.8)",
      radiusItem: 0,
      radiusSubMenuItem: 0,
      // menuSubMenuBg: "#3C3766",
      itemBg: "#3C3766",
      itemHoverBg: "transparent",
      itemActiveBg: "transparent",
      subMenuItemBg: "transparent",
      itemSelectedBg: "transparent",
      itemMarginInline: 0,
      controlHeightSM: 28,
      controlItemBgActive: "transparent",
      colorBgContainer: "#3C3766",
      colorBgElevated: "#3C3766",
      controlHeightLG: 42,
      marginXXS: 0,
      motionDurationMid: "0.1s",
      iconSize: 20,
      collapsedIconSize: 20,
      groupTitleFontSize: 16,
    },
  },
};
