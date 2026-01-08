import { NotificationsPopover } from "@/_components/NotificationsPopover";
import { SidebarToggleButton } from "@/_components/SidebarToggleButton";
import { Input, Space, theme } from "antd";
import { RiSearchLine } from "react-icons/ri";
import { MessagesPopover } from "../MessagesPopover";
import { TranslationsPopover } from "../TranslationsPopover";
import { UserPopover } from "../UserPopover";

export function Header1() {
  const { token } = theme.useToken();
  return (
    <div className="relative flex flex-1 items-center">
      <div className="-ml-3 mr-6">
        <SidebarToggleButton />
      </div>
      <div className="flex-1 max-w-sm">
        <Input
          prefix={<RiSearchLine />}
          placeholder="input search text"
          allowClear
          className="bg-transparent border-none hover:bg-black-300"
          style={{
            color: token?.Layout?.headerColor,
          }}
        />
      </div>
      <div className="ml-auto pl-4 flex items-center">
        <Space className="">
          <TranslationsPopover />
          <NotificationsPopover />
          <MessagesPopover />
          <UserPopover />
        </Space>
      </div>
    </div>
  );
}
