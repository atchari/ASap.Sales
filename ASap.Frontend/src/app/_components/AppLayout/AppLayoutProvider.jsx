import React from "react";
import { AppLayoutContext } from "./AppLayoutContext";
let newLayout = null;
const AppLayoutProvider = ({ children, defaultLayout }) => {
  const [activeLayout, updateActiveLayout] = React.useState(defaultLayout);

  const setActiveLayout = React.useCallback((layout) => {
    updateActiveLayout(layout);
    newLayout = layout;
  }, []);

  React.useEffect(() => {
    if (newLayout !== activeLayout) {
      updateActiveLayout(newLayout);
    }
  }, [activeLayout]);

  const appLayoutContextValue = React.useMemo(() => {
    return {
      activeLayout,
      setActiveLayout,
    };
  }, [activeLayout, setActiveLayout]);

  return (
    <AppLayoutContext.Provider value={appLayoutContextValue}>
      {children}
    </AppLayoutContext.Provider>
  );
};

export { AppLayoutProvider };
