import {
  useMainTheme,
  useWieldyTheme,
} from "@wieldy/components/WieldyTheme/hooks";
import { Space, Typography } from "antd";
import React from "react";
import { CustomizerCard } from "../CustomizerCard";
import { RenderThemeItem } from "../RenderThemeItem";
import { mainThemes } from "./data";

export const MainThemeOptions = () => {
  const { themeMode, switchMode } = useWieldyTheme();
  const { setMainTheme } = useMainTheme();
  const [defaultTheme, setDefaultTheme] = React.useState("theme-1");

  React.useEffect(() => {
    const selectedTheme = mainThemes.find(
      (theme) => theme.name === defaultTheme
    );
    if (selectedTheme && themeMode === "light") {
      setMainTheme(selectedTheme.theme);
    }
    if (themeMode === "dark") {
      setDefaultTheme("theme-1"); // Reset to "theme-1" when dark mode is activated
    }
  }, [defaultTheme, themeMode]);

  const handleThemeChange = (themeOption) => {
    switchMode("light");
    setDefaultTheme(themeOption.name);
  };
  return (
    <CustomizerCard title="Main Theme">
      <Typography.Paragraph className="mb-5">Select theme</Typography.Paragraph>
      <Space size={10} style={{ display: "flex" }} wrap>
        {mainThemes.map((option, index) => {
          return (
            <RenderThemeItem
              option={option}
              key={index}
              onChangeTheme={handleThemeChange}
              activeTheme={defaultTheme}
              spanClass={
                "w-10 h-10 rounded-[50%] shadow-[rgba(0,0,0,0.08)_0px_6px_16px_0px,rgba(0,0,0,0.12)_0px_3px_6px_-4px,rgba(0,0,0,0.05)_0px_9px_28px_8px]"
              }
            />
          );
        })}
      </Space>
    </CustomizerCard>
  );
};
