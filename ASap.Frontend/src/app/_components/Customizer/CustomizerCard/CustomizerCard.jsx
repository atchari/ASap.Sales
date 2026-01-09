import { Card } from "antd";

const CustomizerCard = (props) => {
  const { title, children, ...restProps } = props;

  return (
    <Card
      title={title}
      classNames={{ header: "text-base font-medium" }}
      {...restProps}
      variant="borderless"
    >
      {children}
    </Card>
  );
};

export { CustomizerCard };
