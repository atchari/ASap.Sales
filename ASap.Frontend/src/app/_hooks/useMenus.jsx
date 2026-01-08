import { useTranslation } from "react-i18next";
import { BiBitcoin } from "react-icons/bi";
import { RiDashboard2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function useMenus() {
  const { t } = useTranslation();
  return [
    {
      label: t("sidebar.menuGroup.main"),
      key: "main",
      type: "group",
      children: [
        {
          label: t("sidebar.menu.dashboards"),
          key: "dashboards",
          icon: <RiDashboard2Fill />,
          children: [
            {
              label: (
                <Link to={"/dashboards/crypto"}>
                  {t("sidebar.menuItem.crypto")}
                </Link>
              ),
              key: "crypto",
              icon: <BiBitcoin />,
            },
          ],
        },
      ],
    },
  ];
}
