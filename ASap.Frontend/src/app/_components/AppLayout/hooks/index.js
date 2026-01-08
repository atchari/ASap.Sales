import React from "react";
import { AppLayoutContext } from "../AppLayoutContext";

const useAppLayout = () => {
  return React.useContext(AppLayoutContext);
};

export { useAppLayout };
