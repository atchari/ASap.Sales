import { config } from "@/_config";
import { WieldyTheme } from "@wieldy/components";
import React from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";
import { ACTIONS } from "./constants";

const initialAppState = {
  direction: "ltr",
  customizerVisibility: false,
};

export function AppProvider({ children }) {
  const [appState, dispatch] = React.useReducer(appReducer, {
    ...initialAppState,
  });

  const setDirection = React.useCallback((value) => {
    dispatch({ type: ACTIONS.SET_DIRECTION, payload: { direction: value } });
  }, []);

  const setCustomizerVisibility = React.useCallback((value) => {
    dispatch({
      type: ACTIONS.SET_CUSTOMIZERVISIBILITY,
      payload: { customizerVisibility: value },
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({
      ...appState,
      setDirection,
      setCustomizerVisibility,
    }),
    [appState, setDirection, setCustomizerVisibility]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <WieldyTheme theme={config.defaultTheme}>{children}</WieldyTheme>
    </AppContext.Provider>
  );
}
