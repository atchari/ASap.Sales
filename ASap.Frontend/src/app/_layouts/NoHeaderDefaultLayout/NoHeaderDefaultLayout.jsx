import { Customizer } from "@/_components/Customizer";
import { Footer } from "@/_components/Footer";
import { Sidebar } from "@/_components/Sidebar";
import { WieldyContainer, WieldyLayout } from "@wieldy/components";
import React from "react";
import { layoutConfig } from "./_config";

export const NoHeaderDefaultLayout = ({ children }) => {
  return (
    <WieldyLayout
      sidebar={<Sidebar />}
      footer={<Footer />}
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
