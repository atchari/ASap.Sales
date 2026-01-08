import React from "react";
import { AppContext } from "./AppContext";

export function useApp() {
  return React.useContext(AppContext);
}
