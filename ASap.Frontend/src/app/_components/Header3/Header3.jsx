import { ASSET_IMAGES } from "@/_utilities/paths";
import { WieldyContainer } from "@wieldy/components";
import { useWieldyTheme } from "@wieldy/components/WieldyTheme/hooks";
import { Image, Space } from "antd";
import { Link } from "react-router-dom";
import { MessagesPopover } from "../MessagesPopover";
import { NotificationsPopover } from "../NotificationsPopover";
import { SearchPopover } from "../SearchPopover";
import { UserPopover } from "../UserPopover";
import Menubar from "./Menubar";
import Topbar from "./Topbar";
const Header3 = () => {
  const { themeMode } = useWieldyTheme();
  return (
    <div className="relative flex-1 xl:before:block xl:before:absolute xl:before:right-[8vw] xl:before:top-[-218px] xl:before:h-[350px] xl:before:w-[280px] xl:before:bg-black/10 xl:before:dark:bg-white/20 xl:before:rotate-45 xl:before:rounded-b-[140px]">
      <Topbar />
      <div className="pt-6">
        <WieldyContainer>
          <div className="flex items-center leading-[64px]">
            <div className="flex">
              <Link to="/" className="inline-flex mr-6">
                <Image
                  src={
                    themeMode === "light"
                      ? `${ASSET_IMAGES}/logo.png`
                      : `${ASSET_IMAGES}/logo-white.png`
                  }
                  alt="wieldy-logo"
                  className="w-[90px]"
                  preview={false}
                />
              </Link>
            </div>
            <Menubar />

            <div className="flex items-center ml-auto pl-3 leading-none">
              <Space>
                <SearchPopover />
                <NotificationsPopover />
                <MessagesPopover />
                <UserPopover />
              </Space>
            </div>
          </div>
        </WieldyContainer>
      </div>
    </div>
  );
};

export { Header3 };
