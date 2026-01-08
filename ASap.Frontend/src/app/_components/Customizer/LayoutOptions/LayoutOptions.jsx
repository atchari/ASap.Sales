import { useAppLayout } from "@/_components/AppLayout/hooks";
import { theme } from "antd";
import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { CustomizerCard } from "../CustomizerCard";

const { useToken } = theme;

function getLayouts(LAYOUTS) {
  return [
    {
      name: "Vertical",
      slug: "layout-1",
      component: LAYOUTS.DEFAULT,
    },
    {
      name: "Collapsed",
      slug: "layout-2",
      component: LAYOUTS.COLLAPSED,
    },
    {
      name: "Drawer",
      slug: "layout-3",
      component: LAYOUTS.DRAWER,
    },
    {
      name: "No header collapsed",
      slug: "layout-4",
      component: LAYOUTS.NO_HEADER_COLLAPSED,
    },
    {
      name: "No header default",
      slug: "layout-5",
      component: LAYOUTS.NO_HEADER_DEFAULT,
    },
    {
      name: "Horizontal",
      slug: "layout-6",
      component: LAYOUTS.HORIZONTAL,
    },
    {
      name: "Inside header horizontal",
      slug: "layout-7",
      component: LAYOUTS.INSIDE_HEADER_HORIZONTAL,
    },
    {
      name: "Above header",
      slug: "layout-8",
      component: LAYOUTS.ABOVE_HEADER,
    },
  ];
}

const LayoutOptions = ({ layouts }) => {
  const { token } = useToken();
  const { activeLayout, setActiveLayout } = useAppLayout();
  const layoutOptions = getLayouts(layouts);

  const handleLayoutChange = React.useCallback((layoutOption) => {
    if (layoutOption.component !== activeLayout)
      setActiveLayout(layoutOption?.component);
  }, []);

  return (
    <CustomizerCard title="Layout Options">
      <div className="mb-4 text-red-500 font-medium xl:hidden">
        This option only works if your screen size has width more than 1200px
      </div>
      <div className="grid grid-cols-12 gap-4">
        {layoutOptions.map((layout, index) => {
          const imageSrc = `/assets/images/customizer/layouts/${layout.slug}.png`;

          return (
            <div
              className="col-span-4 cursor-pointer relative"
              key={`${index}-${layout.name}`}
              onClick={() => handleLayoutChange(layout)}
            >
              <img
                src={`${imageSrc}?w=98&fit=crop&auto=format`}
                srcSet={`${imageSrc}?w=98fit=crop&auto=format&dpr=2 2x`}
                alt={layout.slug}
                loading="lazy"
                className="w-full"
              />
              {activeLayout === layout?.component && (
                <span
                  style={{
                    color: token.colorSuccess,
                  }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl"
                >
                  <RiCheckboxCircleFill />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </CustomizerCard>
  );
};

export { LayoutOptions };
