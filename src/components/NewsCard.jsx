import React from "react";
import { Button, Card, Tag } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const NewsCard = ({
  image,
  shortLink,
  link,
  publishedAt,
  sourceName,
  title,
  _id,
}) => {
  console.log(image);
  return (
    <div className="mt-5">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src={
              image !== ""
                ? image
                : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            }
          />
        }
      >
        <Meta title={title} description={shortLink} />
        <Tag>{publishedAt}</Tag>
        <Tag>{sourceName}</Tag>
        <Button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Button>
      </Card>
    </div>
  );
};

export default NewsCard;
