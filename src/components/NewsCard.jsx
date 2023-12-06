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
        cover={
          <img
            alt="example"
            src={
              image !== ""
                ? image
                : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
            className="h-40 object-cover"
          />
        }
      >
        <Meta title={title} description={shortLink} />
        <div className="mt-4  justify-center ">
          <Tag>{publishedAt}</Tag>
          <Tag>{sourceName}</Tag>
        </div>
        <div className="flex justify-center mt-4">
          <Button>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NewsCard;
