import { Button, Popover } from "antd";
import React, { useState } from "react";

export const ThemeModePopover = ({ children, changeTheme }) => {
  const [visible, setVisible] = useState(false);
  const handleYesClick = () => {
    changeTheme(true);
    setVisible(false);
  };

  const handleNoClick = () => {
    changeTheme(false);
    setVisible(false);
  };
  const handleOpenChang = (newOpen) => {
    setVisible(newOpen);
  };
  const popoverContent = (
    <div>
      <Button onClick={handleYesClick} style={{ marginRight: "10px" }}>
        Yes
      </Button>
      <Button onClick={handleNoClick}>No</Button>
    </div>
  );

  return (
    <Popover
      content={popoverContent}
      title="Do you want to continue?"
      open={visible}
      trigger={"click"}
      onOpenChange={handleOpenChang}
    >
      {children}
    </Popover>
  );
};
