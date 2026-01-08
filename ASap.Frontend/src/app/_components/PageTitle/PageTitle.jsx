import { Typography } from "antd";
import { useTranslation } from "react-i18next";
export const PageTitle = ({ title, level }) => {
  const { t } = useTranslation();
  return (
    <Typography.Title level={level} className="mb-8">
      {t(title)}
    </Typography.Title>
  );
};
