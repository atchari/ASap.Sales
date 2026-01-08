import { Customizer } from "@/_components/Customizer";
import { Footer } from "@/_components/Footer";
import { Header1 } from "@/_components/Header1";
import { Sidebar } from "@/_components/Sidebar";
import { WieldyContainer, WieldyLayout } from "@wieldy/components";
import { layoutConfig } from "./_config";

export const DrawerLayout = ({ children }) => {
  return (
    <WieldyLayout
      header={<Header1 />}
      footer={<Footer />}
      sidebar={<Sidebar />}
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
