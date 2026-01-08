import { useWieldyLayoutHeader } from "@wieldy/components/WieldyLayout/hooks";
import {
  useHeaderTheme,
  useWieldyTheme,
} from "@wieldy/components/WieldyTheme/hooks";
import { Space, Switch, Typography } from "antd";
import React from "react";
import { CustomizerCard } from "../CustomizerCard";
import { RenderThemeItem } from "../RenderThemeItem";
import { headerThemes } from "./data";

export const HeaderOptions = () => {
  const { setHeaderTheme } = useHeaderTheme();
  const { headerOptions, setHeaderOptions } = useWieldyLayoutHeader();
  const [activeHeaderTheme, setActiveHeaderTheme] = React.useState("theme-1");
  const { themeMode, switchMode } = useWieldyTheme();

  React.useEffect(() => {
    const selectedTheme = headerThemes.find(
      (theme) => theme.name === activeHeaderTheme
    );
    if (selectedTheme && themeMode === "light") {
      setHeaderTheme(selectedTheme.theme);
    }
    if (themeMode === "dark") {
      setActiveHeaderTheme("theme-1"); // Reset to "theme-1" when dark mode is activated
    }
  }, [activeHeaderTheme, themeMode]);

  const handleThemeChange = (themeOption) => {
    switchMode("light");
    setActiveHeaderTheme(themeOption.name);
  };
  return (
    <CustomizerCard title="Header Options">
      <Typography.Paragraph className="mb-5">Select theme</Typography.Paragraph>
      <Space size={10} className="flex" wrap>
        {headerThemes.map((option, index) => {
          return (
            <RenderThemeItem
              option={option}
              key={index}
              onChangeTheme={handleThemeChange}
              activeTheme={activeHeaderTheme}
              spanClass={
                "w-10 h-10 rounded-[50%] shadow-[rgba(0,0,0,0.08)_0px_6px_16px_0px,rgba(0,0,0,0.12)_0px_3px_6px_-4px,rgba(0,0,0,0.05)_0px_9px_28px_8px]"
              }
            />
          );
        })}
      </Space>
      <Space size={16} className="mt-6">
        <Switch
          checked={headerOptions.spreadOut}
          onChange={() =>
            setHeaderOptions({ spreadOut: !headerOptions.spreadOut })
          }
        />
        <span>Full Width</span>
      </Space>
      <Space size={16} className="mt-4">
        <Switch
          checked={headerOptions.fixed}
          onChange={() => setHeaderOptions({ fixed: !headerOptions.fixed })}
        />
        <span>Header Fixed</span>
      </Space>
    </CustomizerCard>
  );
};
