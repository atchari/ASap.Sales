import { LAYOUTS } from "@/_layouts";
import { Drawer, Space } from "antd";
import React from "react";
import { RiSettings2Line } from "react-icons/ri";
import { useApp } from "../AppProvider/hooks";
import { FooterOptions } from "./FooterOptions";
import { HeaderOptions } from "./HeaderOptions";
import { LayoutOptions } from "./LayoutOptions";
import { LocaleOptions } from "./LocaleOptions";
import { MainThemeOptions } from "./MainThemeOptions";
import { SidebarOptions } from "./SidebarOptions";
import { ThemeModeOption } from "./ThemeModeOptions";

const Customizer = () => {
  const { direction, customizerVisibility, setCustomizerVisibility } = useApp();

  const showCustomizer = React.useCallback(() => {
    setCustomizerVisibility(true);
  }, [setCustomizerVisibility]);

  const closeCustomizer = React.useCallback(() => {
    setCustomizerVisibility(false);
  }, [setCustomizerVisibility]);

  return (
    <>
      <Drawer
        title="Customizer"
        size={350}
        onClose={closeCustomizer}
        open={customizerVisibility}
        placement={direction === "rtl" ? "left" : "right"}
      >
        <Space size={24} direction="vertical" className="flex">
          <LayoutOptions layouts={LAYOUTS} />
          <ThemeModeOption />
          <MainThemeOptions />
          <HeaderOptions />
          <SidebarOptions />
          <FooterOptions />
          <LocaleOptions />
        </Space>
      </Drawer>

      <div
        onClick={showCustomizer}
        className="fixed right-0 top-36 z-50 rounded-s-[50px] cursor-pointer h-11 py-3 px-5 text-2xl text-white bg-gradient-to-l from-[#fa8c16] to-[#f5222d]"
      >
        <RiSettings2Line className="animate-spin" />
      </div>
    </>
  );
};

export { Customizer };
