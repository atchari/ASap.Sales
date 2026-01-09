import { useSidebarTheme } from "@wieldy/components/WieldyTheme/hooks";
import { ConfigProvider, Drawer } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useWieldyLayoutSidebar } from "../../hooks";
import { WieldySidebarProps } from "../../types";

export function WieldyLayoutSidebar({
  children,
  className,
  style,
  isDrawer,
  fixed,
  ...restProps
}) {
  const { sidebarTheme } = useSidebarTheme();
  const { sidebarOptions, setSidebarOptions } = useWieldyLayoutSidebar();
  const screens = useBreakpoint();

  const siderBg =
    sidebarTheme?.components?.Layout?.siderBg ??
    sidebarTheme?.components?.Menu?.itemBg ??
    sidebarTheme?.token?.colorBgContainer;

  const siderStyle = sidebarOptions?.fixed
    ? {
        height: "100vh",
        position: "fixed",
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
      }
    : {};

  React.useEffect(() => {
    if (sidebarOptions.breakpoint) {
      if (!screens[sidebarOptions.breakpoint]) {
        setSidebarOptions({
          isDrawer: !screens[sidebarOptions.breakpoint],
          collapsed: true,
        });
      } else {
        setSidebarOptions({
          isDrawer: !screens[sidebarOptions.breakpoint],
          collapsed: false,
        });
      }
    }
  }, [sidebarOptions?.breakpoint, screens, setSidebarOptions]);
  return (
    <ConfigProvider theme={sidebarTheme}>
      {!isDrawer ? (
        <Sider
          style={{ ...style, ...siderStyle, backgroundColor: siderBg }}
          onCollapse={(collapsed) => setSidebarOptions({ collapsed })}
          {...restProps}
        >
          {children}
        </Sider>
      ) : (
        <Drawer
          open={!sidebarOptions?.collapsed}
          placement="left"
          closeIcon={null}
          classNames={{ body: "p-0" }}
          footer={null}
          size={sidebarOptions?.width}
          style={{ backgroundColor: siderBg }}
          styles={{ body: { backgroundColor: siderBg } }}
          onClose={() => setSidebarOptions({ collapsed: true })}
          destroyOnClose={true}
        >
          {children}
        </Drawer>
      )}
    </ConfigProvider>
  );
}
WieldyLayoutSidebar.propTypes = WieldySidebarProps;
