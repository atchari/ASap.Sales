import React from "react";
import { AppTranslationContext } from "../AppTranslationContext";

export const useAppTranslation = () => {
  return React.useContext(AppTranslationContext);
};
