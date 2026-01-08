import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Input, theme } from "antd";
import React from "react";
import {
  RiMoreFill,
  RiPencilLine,
  RiSearch2Line,
  RiStarLine,
} from "react-icons/ri";
import { MessagesItem } from "./MessagesItem";
import { messagesData } from "./data";
const { useToken } = theme;

export function MessagesCard() {
  const { token } = useToken();
  return (
    <Card
      title="Messages"
      extra={
        <React.Fragment>
          <Button
            type="text"
            size="small"
            shape={"circle"}
            icon={<RiStarLine fontSize={18} />}
          />
          <Button
            type="text"
            size="small"
            shape={"circle"}
            icon={<RiPencilLine fontSize={18} />}
          />
          <Button
            type="text"
            size="small"
            shape={"circle"}
            icon={<RiMoreFill fontSize={18} />}
          />
        </React.Fragment>
      }
      actions={[
        <Button type={"link"} size={"small"} key={"view-all"}>
          View all
          <ArrowRightOutlined />
        </Button>,
      ]}
      classNames={{
        body: "p-0 max-h-[300px] overflow-auto",
        header: "border-0",
      }}
      className="w-[360px]"
    >
      <div
        className="sticky top-0 z-10 px-4 py-2"
        style={{
          backgroundColor: token.colorBgContainer,
        }}
      >
        <Input
          prefix={<RiSearch2Line />}
          className="rounded-3xl shadow-lg "
          allowClear
          placeholder="Search Messages..."
        />
      </div>
      {messagesData?.map((item, index) => (
        <MessagesItem key={index} item={item} />
      ))}
    </Card>
  );
}
