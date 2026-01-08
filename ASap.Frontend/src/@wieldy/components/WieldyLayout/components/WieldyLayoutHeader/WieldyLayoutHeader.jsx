import { useHeaderTheme } from "@wieldy/components/WieldyTheme/hooks";
import { ConfigProvider } from "antd";
import { Header } from "antd/es/layout/layout";
import { useWieldyLayoutHeader } from "../../hooks";
import { WieldyHeaderProps } from "../../types";

export function WieldyLayoutHeader({
  children,
  className,
  style,
  ...restProps
}) {
  const { headerTheme } = useHeaderTheme();
  const { headerOptions } = useWieldyLayoutHeader();

  const headerStyle = headerOptions?.fixed
    ? {
        ...style,
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }
    : {
        ...style,
      };
  return (
    <ConfigProvider theme={headerTheme}>
      <Header style={headerStyle} className={className} {...restProps}>
        {children}
      </Header>
    </ConfigProvider>
  );
}
WieldyLayoutHeader.propTypes = WieldyHeaderProps;
