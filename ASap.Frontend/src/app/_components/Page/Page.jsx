import { LAYOUTS } from "@/_layouts";
import React from "react";
import { useAppLayout } from "../AppLayout/hooks";
const ActiveLayout = ({ children, layout }) => {
  const { activeLayout, setActiveLayout } = useAppLayout();
  const LayoutComponent = React.useMemo(() => {
    return activeLayout && activeLayout.component;
  }, [activeLayout]);

  React.useEffect(() => {
    setActiveLayout(layout);
  }, [layout]);

  return <LayoutComponent>{children}</LayoutComponent>;
};

const Page = ({ Component, hoc, ...restProps }) => {
  const { activeLayout } = useAppLayout();
  let PageComponent = hoc && hoc(Component);

  const newLayout = React.useMemo(() => {
    if (activeLayout) {
      return activeLayout;
    }
    return LAYOUTS.DEFAULT;
  }, [activeLayout]);

  if (hoc) {
    return (
      <ActiveLayout layout={newLayout}>
        <PageComponent {...restProps} />
      </ActiveLayout>
    );
  }
  return (
    <ActiveLayout layout={newLayout}>
      <Component {...restProps} />
    </ActiveLayout>
  );
};

export { Page };
