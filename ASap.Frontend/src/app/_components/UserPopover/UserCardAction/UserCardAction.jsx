import { useAuth } from "@/_components/AuthProvider/hooks";
import { ASSET_AVATARS } from "@/_utilities/paths";
import {
  EditOutlined,
  LogoutOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Divider, Menu, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("Profile", "profile", <UserOutlined />),
  getItem("Edit Profile", "update-profile", <EditOutlined />),
  getItem("Switch User", "switch-user", <UserSwitchOutlined />),
  getItem("Logout", "logout", <LogoutOutlined />),
];

export const UserCardAction = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handlClick = async (opt) => {
    if (opt.key === "logout") {
      await logout();
      return navigate("/auth/login-1");
    }
  };
  return (
    <Card
      classNames={{ body: "p-0" }}
      className="w-[250px] overflow-hidden"
      variant="borderless"
    >
      <div className="flex flex-col items-center text-center p-4">
        <Avatar src={`${ASSET_AVATARS}/avatar9.jpg`} size={60} />
        <div>
          <Typography.Title level={5} className="mb-1">
            Harmayni Croft
          </Typography.Title>
          <Typography.Text type="secondary">
            harmaynicroft@example.com
          </Typography.Text>
        </div>
      </div>
      <Divider className="m-0" />
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        className="shadow-none"
        onClick={(opt) => handlClick(opt)}
      />
    </Card>
  );
};
