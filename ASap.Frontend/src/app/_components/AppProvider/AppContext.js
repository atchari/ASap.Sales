import React from "react";

export const AppContext = React.createContext({
  direction: "ltr",
  // translation: {},
  setDirection(value) {
    console.log(`setDirection ${value} with AppProvider`);
    throw Error(`setDirection cannot be used without using AppProvider.`);
  },
  setCustomizerVisibility(value) {
    console.log(`setCustomizerVisibility ${value} with AppProvider`);
    throw Error(
      `setCustomizerVisibility cannot be used without using AppProvider.`
    );
  },
});
