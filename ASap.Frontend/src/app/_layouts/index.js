import { AboveHeaderLayout } from "./AboveHeaderLayout";
import { CollapsedLayout } from "./CollapsedLayout";
import { DefaultLayout } from "./DefaultLayout";
import { DrawerLayout } from "./DrawerLayout";
import { HorizontalLayout } from "./HorizontalLayout";
import { InsideHeaderHorizontalLayout } from "./InsideHeaderHorizontalLayout";
import { NoHeaderCollapsedLayout } from "./NoHeaderCollapsedLayout";
import { NoHeaderDefaultLayout } from "./NoHeaderDefaultLayout";

export const LAYOUTS = {
  DEFAULT: {
    component: DefaultLayout,
  },
  COLLAPSED: {
    component: CollapsedLayout,
  },
  DRAWER: {
    component: DrawerLayout,
  },
  NO_HEADER_COLLAPSED: {
    component: NoHeaderCollapsedLayout,
  },

  NO_HEADER_DEFAULT: {
    component: NoHeaderDefaultLayout,
  },

  HORIZONTAL: {
    component: HorizontalLayout,
  },

  INSIDE_HEADER_HORIZONTAL: {
    component: InsideHeaderHorizontalLayout,
  },

  ABOVE_HEADER: {
    component: AboveHeaderLayout,
  },
};
