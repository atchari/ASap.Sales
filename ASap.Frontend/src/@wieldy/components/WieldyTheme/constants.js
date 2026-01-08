import { theme } from "antd";
import { WieldyThemeContextType } from "./types";

export const defaultWieldyTheme = {
  mainTheme: {},
  sidebarTheme: {},
  headerTheme: {},
  footerTheme: {},
  rightSidebarTheme: {},
};

export const defaultWieldyContext = {
  mainTheme: {},
  setMainTheme(value) {
    console.log(`setMainTheme ${value} with WieldyTheme`);
    throw Error("setMainTheme can only be used with WieldyTheme");
  },
  setHeaderTheme(value) {
    console.log(`setHeaderTheme ${value} with WieldyTheme`);
    throw Error("setHeaderTheme can only be used with WieldyTheme");
  },
  setSidebarTheme(value) {
    console.log(`setSidebarTheme ${value} with WieldyTheme`);
    throw Error("setSidebarTheme can only be used with WieldyTheme");
  },
  setFooterTheme(value) {
    console.log(`setFooterTheme ${value} with WieldyTheme`);
    throw Error("setFooterTheme can only be used with WieldyTheme");
  },
  setRightSidebarTheme(value) {
    console.log(`setRightSidebarTheme ${value} with WieldyTheme`);
    throw Error("setRightSidebarTheme can only be used with WieldyTheme");
  },
  setTheme(value) {
    console.log(`setTheme ${value} with WieldyTheme`);
    throw Error("setTheme can only be used with WieldyTheme");
  },
  switchMode(value) {
    console.log(`switchMode ${value} with WieldyTheme`);
    throw Error("switchMode can only be used with WieldyTheme");
  },
};

export const ACTIONS = {
  SET_MAIN_THEME: "set-main-theme",
  SET_HEADER_THEME: "set-header-theme",
  SET_FOOTER_THEME: "set-footer-theme",
  SET_SIDEBAR_THEME: "set-sidebar-theme",
  SET_RIGHT_SIDEBAR_THEME: "set-right-sidebar-theme",
  SET_THEME: "set-theme",
};

// const mainDarkTheme =

export const getDarkTheme = (wieldyTheme) => {
  const mainDarkTheme = {
    ...wieldyTheme.mainTheme,
    algorithm: [theme.darkAlgorithm],
    token: {
      ...wieldyTheme.mainTheme.token,
      colorBgBase: "#38424B",
      colorPrimary: "#7ddcff",
      colorBgLayout: "#38424B",
      colorText: "#E0E0E0",
      colorTextSecondary: "#b8b8b8",
      colorTextHeading: "#ededed",
      colorLink: "#7ddcff",
      colorLinkHover: "#52c6f7",
      colorLinkActive: "#52c6f7",
      colorError: "#F5222D",
      colorWarning: "#FA8C16",
      colorInfo: "#1890FF",
      controlHeight: 36,
      boxShadowTertiary: "0 0 5px 5px rgba(0,0,0,0.03)",
      fontFamily: "NoirPro, Arial, Helvetica, sans-serif",
    },
    components: {
      ...wieldyTheme.mainTheme.components,
      Card: {
        ...wieldyTheme.mainTheme.components?.Card,
        borderRadiusLG: 10,
        colorTextHeading: "#ededed",
        fontSizeLG: 14,
      },
      Typography: {
        ...wieldyTheme.mainTheme.components?.Typography,
        fontWeightStrong: 400,
        colorText: "#E0E0E0",
        colorTextDescription: "#b8b8b8",
      },
      Alert: {
        ...wieldyTheme.mainTheme.components?.Alert,
        borderRadiusLG: 6,
      },
      Button: {
        ...wieldyTheme.mainTheme.components?.Button,
        controlHeightLG: 42,
        borderRadiusLG: 6,
        colorLink: "#7ddcff",
        colorLinkHover: "#52c6f7",
        colorLinkActive: "#52c6f7",
        primaryShadow: "none",
        defaultShadow: "none",
        dangerShadow: "none",
      },
      Modal: {
        ...wieldyTheme.mainTheme.components?.Modal,
        colorTextHeading: "#ededed",
        fontWeightStrong: 500,
      },
      Steps: {
        ...wieldyTheme.mainTheme.components?.Steps,
        controlHeight: 32,
        controlHeightLG: 40,
      },
    },
  };
  return {
    mainTheme: mainDarkTheme,
    headerTheme: {
      ...mainDarkTheme,
      token: {
        ...mainDarkTheme.token,
        headerColor: "#E0E0E0",
      },
      components: {
        ...mainDarkTheme.components,
        Menu: {
          itemColor: "#FFF",
          itemHoverColor: "#fa8c15",
          itemSelectedColor: "#fa8c15",
          itemBg: "#003366",
          groupTitleColor: "#FFF",
          colorItemTextSelectedHorizontal: "#fa8c15",
          darkItemColor: "#FFF",
          darkItemBg: "#003366",
          darkItemHoverColor: "#fa8c15",
          darkItemSelectedColor: "#fa8c15",
          darkItemSelectedBg: "#003366",
        },
        Button: {
          colorText: "#FFF",
        },
        Dropdown: {
          colorText: "#E0E0E0",
        },
        Select: {
          colorText: "#E0E0E0",
          controlOutline: "transparent",
          controlItemBgActive: "#2d353c",
        },
        Layout: {
          headerBg: "#2d353c",
        },
      },
    },
    footerTheme: {
      ...mainDarkTheme,
      token: {
        ...mainDarkTheme.token,
        colorText: "#E0E0E0",
      },
      components: {
        Layout: {
          footerBg: "#38424B",
        },
      },
    },
    sidebarTheme: {
      ...mainDarkTheme,
      token: {
        ...mainDarkTheme.token,
        colorText: "#ffffff",
      },
      components: {
        ...mainDarkTheme.components,
        Menu: {
          itemColor: "#ffffff",
          itemHoverColor: "#fa8c15",
          itemSelectedColor: "#fa8c15",
          groupTitleColor: "rgba(255, 255, 255, 0.8)",
          radiusItem: 0,
          radiusSubMenuItem: 0,
          menuSubMenuBg: "#343d45",
          itemBg: "#343d45",
          itemHoverBg: "transparent",
          itemActiveBg: "transparent",
          subMenuItemBg: "transparent",
          itemSelectedBg: "rgba(255,255,255,0.12)",
          itemMarginInline: 0,
          controlHeightSM: 28,
          controlItemBgActive: "transparent",
          colorBgContainer: "#343d45",
          colorBgElevated: "#343d45",
          controlHeightLG: 42,
          marginXXS: 0,
          motionDurationMid: "0.1s",
          iconSize: 20,
          collapsedIconSize: 20,
          groupTitleFontSize: 16,
          activeBarBorderWidth: 0,
        },
        Layout: {
          siderBg: "#343d45",
        },
      },
    },
  };
};
defaultWieldyContext.propTypes = WieldyThemeContextType;
