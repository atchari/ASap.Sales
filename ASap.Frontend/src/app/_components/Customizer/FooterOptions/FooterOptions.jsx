import { useWieldyLayoutFooter } from "@wieldy/components/WieldyLayout/hooks";
import {
  useFooterTheme,
  useWieldyTheme,
} from "@wieldy/components/WieldyTheme/hooks";
import { Space, Switch, theme, Typography } from "antd";
import React, { useState } from "react";
import { CustomizerCard } from "../CustomizerCard";
import { RenderThemeItem } from "../RenderThemeItem";
import { footerThemes } from "./data";

const { useToken } = theme;

export const FooterOptions = () => {
  const { token } = useToken();
  const [activeFooterTheme, setActiveFooterTheme] = useState("theme-1");
  const { setFooterTheme } = useFooterTheme();
  const { themeMode, switchMode } = useWieldyTheme();
  const { footerOptions, setFooterOptions } = useWieldyLayoutFooter();

  React.useEffect(() => {
    const selectedTheme = footerThemes.find(
      (theme) => theme.name === activeFooterTheme
    );
    if (selectedTheme && themeMode === "light") {
      setFooterTheme(selectedTheme.theme);
    }
    if (themeMode === "dark") {
      setActiveFooterTheme("theme-1"); // Reset to "theme-1" when dark mode is activated
    }
  }, [activeFooterTheme, themeMode]);

  const handleThemeChange = (themeOption) => {
    switchMode("light");
    setActiveFooterTheme(themeOption.name);
  };

  return (
    <CustomizerCard title="Footer Options">
      <Typography.Paragraph style={{ marginBottom: token.marginMD }}>
        Select theme
      </Typography.Paragraph>
      <Space size={10} className="flex" wrap>
        {footerThemes.map((option, index) => {
          return (
            <RenderThemeItem
              option={option}
              key={index}
              onChangeTheme={handleThemeChange}
              activeTheme={activeFooterTheme}
              spanClass={
                "w-10 h-10 rounded-[50%] shadow-[rgba(0,0,0,0.08)_0px_6px_16px_0px,rgba(0,0,0,0.12)_0px_3px_6px_-4px,rgba(0,0,0,0.05)_0px_9px_28px_8px]"
              }
            />
          );
        })}
      </Space>
      <Space size={16} className="mt-6">
        <Switch
          checked={footerOptions.spreadOut}
          onChange={() =>
            setFooterOptions({ spreadOut: !footerOptions.spreadOut })
          }
        />
        <span>Full Width</span>
      </Space>
      <Space size={16} className="mt-4">
        <Switch
          checked={footerOptions.fixed}
          onChange={() => setFooterOptions({ fixed: !footerOptions.fixed })}
        />
        <span>Footer Fixed</span>
      </Space>
    </CustomizerCard>
  );
};
