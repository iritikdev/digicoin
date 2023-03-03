import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../service/cryptoNewsApi";
import { useGetCryptosQuery } from "../service/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImageUrl =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return "loading...";

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={5}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImageUrl}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <p>
                  {news.description.length > 150
                    ? `${news.description.substring(0, 150)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImageUrl
                      }
                      alt=""
                    />
                    <Text
                      className="provider-name"
                      style={{ fontWeight: "bolder" }}
                    >
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text style={{ fontSize: "12", paddingTop: "5" }}>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
