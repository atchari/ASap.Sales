import { theme } from "antd";

export const mainTheme = {
  algorithm: [theme.defaultAlgorithm],
  token: {
    //colorBlack: "#000000",
    colorPrimary: "#fa541c",
    colorBgLayout: "#F5F5F5",
    colorText: "#545454",
    colorTextSecondary: "#8C8C8C",
    colorTextHeading: "#262626",
    colorLink: "#fa541c",
    colorLinkHover: "#d46b08",
    colorLinkActive: "#d46b08",
    colorError: "#F5222D",
    colorWarning: "#FA8C16",
    colorInfo: "#1890FF",
    controlHeight: 36,
    boxShadowTertiary: "0 0 5px 5px rgba(0,0,0,0.03)",
    fontFamily: "NoirPro, Arial, Helvetica, sans-serif",
  },
  components: {
    Card: {
      borderRadiusLG: 10,
      colorTextHeading: "#262626",
      fontSizeLG: 14,
      headerFontSize: 16,
      fontWeightStrong: 400,
      headerHeight: 65,
    },

    Typography: {
      fontWeightStrong: 400,
    },
    Alert: {
      borderRadiusLG: 6,
    },
    Button: {
      controlHeightLG: 42,
      borderRadiusLG: 6,
      colorLink: "#fa541c",
      colorLinkHover: "#d46b08",
      colorLinkActive: "#d46b08",
    },
    Modal: {
      colorTextHeading: "#262626",
      fontWeightStrong: 500,
    },
    Steps: {
      controlHeight: 32,
      controlHeightLG: 40,
    },
    Menu: {
      iconSize: 20,
      collapsedIconSize: 20,
      groupTitleFontSize: 16,
    },
    Layout: {
      footerBg: "#FFF",
    },
  },
};
