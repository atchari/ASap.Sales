import { MessagesCard } from "@/_components/MessagesCard";
import { Button, Dropdown } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { RiMessage2Line } from "react-icons/ri";

export function MessagesPopover() {
  const screens = useBreakpoint();
  return (
    <Dropdown
      trigger={["click"]}
      placement={screens?.xs ? "bottom" : "bottomRight"}
      dropdownRender={() => <MessagesCard />}
    >
      <Button
        type="text"
        shape="circle"
        icon={<RiMessage2Line className="text-xl" />}
        className="[&_.ant-btn-icon]:inline-flex"
      />
    </Dropdown>
  );
}
