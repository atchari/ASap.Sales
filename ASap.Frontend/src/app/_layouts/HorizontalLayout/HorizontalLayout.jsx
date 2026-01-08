import { Customizer } from "@/_components/Customizer";
import { Footer1 } from "@/_components/Footer1";
import { Header2 } from "@/_components/Header2";
import { WieldyContainer, WieldyLayout } from "@wieldy/components";
import React from "react";
import { layoutConfig } from "./_config";

export const HorizontalLayout = ({ children }) => {
  return (
    <WieldyLayout
      header={<Header2 />}
      footer={<Footer1 />}
      styles={layoutConfig.styles}
      layoutOptions={layoutConfig.layoutOptions}
      classes={layoutConfig.classes}
    >
      <WieldyContainer>
        {children}
        <Customizer />
      </WieldyContainer>
    </WieldyLayout>
  );
};
