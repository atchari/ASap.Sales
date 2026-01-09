import { useMenus } from "@/_hooks";
import { useWieldyLayoutSidebar } from "@wieldy/components/WieldyLayout/hooks";

import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

function selectedOption(option) {
  const parts = option?.split("/");
  const selectedOption = option !== "/" ? parts?.pop() : "crypto";
  return selectedOption;
}

const Sidebar = () => {
  const { sidebarOptions } = useWieldyLayoutSidebar();
  const location = useLocation();
  const menuItems = useMenus();
  return (
    <div className="relative h-full">
      <div className="flex items-center px-5 py-3 bg-white sticky top-0 z-10 min-h-[72px]">
        <div className="flex-1">
          <Link to="/">
            {sidebarOptions.collapsed ? (
              <img src="/assets/images/logo_iconic.svg" alt="Logo" className="h-9" />
            ) : (
              <img src="/assets/images/logo_a_sap.svg" alt="Logo" className="h-9" />
            )}
          </Link>
        </div>
      </div>
      <div className="h-[calc(100%-72px)] overflow-y-auto pb-6">
        <Menu
          items={menuItems}
          defaultSelectedKeys={[selectedOption(location?.pathname)]}
          mode="inline"
          inlineIndent={36}
          defaultOpenKeys={["dashboards"]}
          className="[&_.ant-menu-item-group-title]:pl-9 [&_.ant-menu-item-group-title]:pt-9 [&.ant-menu-inline-collapsed_.ant-menu-item-group-title]:hidden [&_.ant-menu-submenu-title_.ant-menu-submenu-arrow]:start-5 [&_.ant-menu-sub_.ant-menu-submenu-title_.ant-menu-submenu-arrow]:start-14"
        />
      </div>
    </div>
  );
};

export { Sidebar };
