import { mainTheme } from "./main";

export const sidebarTheme = {
  ...mainTheme,
  token: {
    ...mainTheme.token,
    colorText: "#038fdd",
  },
  components: {
    ...mainTheme.components,
    Layout: {
      siderBg: "#003366",
    },
    Drawer: {
      colorBgElevated: "#003366",
    },
    Menu: {
      itemColor: "#038fdd",
      itemHoverColor: "#fa8c15",
      itemSelectedColor: "#fa8c15",
      groupTitleColor: "rgba(255, 255, 255, 0.8)",
      radiusItem: 0,
      radiusSubMenuItem: 0,
      //menuSubMenuBg: "#003366",
      itemBg: "#003366",
      itemHoverBg: "transparent",
      itemActiveBg: "transparent",
      subMenuItemBg: "transparent",
      itemSelectedBg: "transparent",
      itemMarginInline: 0,
      controlHeightSM: 28,
      controlItemBgActive: "transparent",
      colorBgContainer: "#003366",
      colorBgElevated: "#003366",
      controlHeightLG: 42,
      marginXXS: 0,
      motionDurationMid: "0.1s",
      iconSize: 20,
      collapsedIconSize: 20,
      groupTitleFontSize: 16,
    },
  },
};
