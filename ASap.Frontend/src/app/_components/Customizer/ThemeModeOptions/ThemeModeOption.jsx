import { useWieldyTheme } from "@wieldy/components/WieldyTheme/hooks";
import { Space, Switch } from "antd";
import React from "react";
import { CustomizerCard } from "../CustomizerCard";

const ThemeModeOption = () => {
  const { switchMode, themeMode } = useWieldyTheme();
  const handleChange = React.useCallback((isDark) => {
    if (isDark) {
      switchMode("dark");
    } else {
      switchMode("light");
    }
  }, []);
  return (
    <CustomizerCard title="Dark Theme">
      <Space size={16}>
        <Switch checked={themeMode === "dark"} onChange={handleChange} />
        <span>Apply Dark Theme</span>
      </Space>
    </CustomizerCard>
  );
};

export { ThemeModeOption };
