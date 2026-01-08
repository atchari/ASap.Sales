import { useWieldyTheme } from "@wieldy/components/WieldyTheme/hooks";
import { theme } from "antd";
import { RiCheckboxCircleFill } from "react-icons/ri";

const { useToken } = theme;

export const RenderThemeItem = ({
  option,
  activeTheme,
  onChangeTheme,
  spanClass,
}) => {
  const { token } = useToken();
  const { themeMode } = useWieldyTheme();
  const isActive = activeTheme === option.name;
  const themeStyles = {
    background: themeMode === "light" ? option.color : option.colorDark,
  };

  return (
    <div
      key={option.name}
      className="flex min-w-0 cursor-pointer relative"
      onClick={() => onChangeTheme(option)}
    >
      <span style={themeStyles} className={spanClass} />
      {isActive && (
        <span
          style={{ color: token.colorSuccess }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl"
        >
          <RiCheckboxCircleFill />
        </span>
      )}
    </div>
  );
};
