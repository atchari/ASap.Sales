import { Button, Dropdown } from "antd";
import ReactCountryFlag from "react-country-flag";
import { useAppTranslation } from "../AppTranslation/hooks";
import { TranslationSelectOption } from "./TranslationSelectOption";

export const TranslationsPopover = () => {
  const { activeLocale } = useAppTranslation();
  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomRight"
      dropdownRender={() => <TranslationSelectOption />}
    >
      <div
        className="cursor-pointer
    ml-[var(--token-marginSM)] 
    lg:ml-[calc(var(--token-marginXL)*1.5)]
    [& .ant-popover-inner]:p-0"
      >
        <Button
          type="text"
          shape="circle"
          icon={
            <ReactCountryFlag
              countryCode={activeLocale?.flag}
              svg
              className="text-xl"
            />
          }
          className="[&_.ant-btn-icon]:inline-flex"
        />
      </div>
    </Dropdown>
  );
};
