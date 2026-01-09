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
      popupRender={() => <TranslationSelectOption />}
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
              style={{
                fontSize: '1.5em',
                lineHeight: '1em',
              }}
              aria-label={activeLocale?.label}
            />
          }
          className="[&_.ant-btn-icon]:inline-flex"
        />
      </div>
    </Dropdown>
  );
};
