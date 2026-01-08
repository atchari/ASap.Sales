import { Customizer } from "@/_components/Customizer";
import { Footer } from "@/_components/Footer";
import { Header1 } from "@/_components/Header1";
import { Sidebar } from "@/_components/Sidebar";
import { WieldyContainer, WieldyLayout } from "@wieldy/components";
import { Navigate, useLocation } from "react-router-dom";
import { layoutConfig } from "./_config";

export function DefaultLayout({ children }) {
  const location = useLocation();
  return (
    <WieldyLayout
      header={<Header1 />}
      sidebar={<Sidebar />}
      footer={<Footer />}
      styles={layoutConfig.styles}
      classes={layoutConfig.classes}
      layoutOptions={layoutConfig.layoutOptions}
    >
      <WieldyContainer>
        {location.pathname === "/" && <Navigate to={"/dashboards/crypto"} />}
        {children}
        {/* <Outlet /> */}
        <Customizer />
      </WieldyContainer>
    </WieldyLayout>
  );
}
