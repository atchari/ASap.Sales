import { useWieldyLayoutSidebar } from "@wieldy/components/WieldyLayout/hooks";
import {
  useSidebarTheme,
  useWieldyTheme,
} from "@wieldy/components/WieldyTheme/hooks";
import { Space, Switch, Typography } from "antd";
import React from "react";
import { CustomizerCard } from "../CustomizerCard";
import { RenderThemeItem } from "../RenderThemeItem";
import { sidebarThemes } from "./data";

export const SidebarOptions = () => {
  const [activeSidebarTheme, setActiveSidebarTheme] = React.useState("theme-1");
  const { setSidebarTheme } = useSidebarTheme();
  const { sidebarOptions, setSidebarOptions } = useWieldyLayoutSidebar();
  const { themeMode, switchMode } = useWieldyTheme();

  React.useEffect(() => {
    const selectedTheme = sidebarThemes.find(
      (theme) => theme.name === activeSidebarTheme
    );
    if (selectedTheme && themeMode === "light") {
      setSidebarTheme(selectedTheme.theme);
    }
    if (themeMode === "dark") {
      setActiveSidebarTheme("theme-1"); // Reset to "theme-1" when dark mode is activated
    }
  }, [activeSidebarTheme, themeMode]);

  const handleThemeChange = (themeOption) => {
    switchMode("light");
    setActiveSidebarTheme(themeOption.name);
  };

  return (
    <CustomizerCard title="Sidebar Options">
      <div className="mb-8">
        <Typography.Paragraph className="mb-5">
          Background Color
        </Typography.Paragraph>
        <Space size={10} className="flex" wrap>
          {sidebarThemes.map((option, index) => {
            return (
              <RenderThemeItem
                option={option}
                key={index}
                onChangeTheme={handleThemeChange}
                activeTheme={activeSidebarTheme}
                spanClass={"w-10 h-20 rounded-md"}
              />
            );
          })}
        </Space>
      </div>
      <Space size={16}>
        <Switch
          checked={sidebarOptions.fixed}
          onChange={() => setSidebarOptions({ fixed: !sidebarOptions.fixed })}
        />
        <span>Sidebar Fixed</span>
      </Space>
    </CustomizerCard>
  );
};
