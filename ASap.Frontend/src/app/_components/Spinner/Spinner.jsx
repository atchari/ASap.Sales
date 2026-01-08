import { Spin } from "antd";
import { RiLoader5Line } from "react-icons/ri";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        minWidth: 0,
        alignItems: "center",
        alignContent: "center",
        flex: 1,
      }}
    >
      <Spin indicator={<RiLoader5Line />} size="small" />
    </div>
  );
};

export { Spinner };
