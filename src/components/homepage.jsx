import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../service/cryptoApi";
import { CryptoCurrencies, News } from "../components";

const { Title, Text } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return "loading...";

  const globalStats = data?.data?.stats;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Exchanges"
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Text className="show-more">
          {" "}
          <Link to="/cryptocurrencies">
            Show More <ArrowRightOutlined />
          </Link>{" "}
        </Text>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={3} className="home-title">
          Lasted Cypto News
        </Title>
        <Text className="show-more">
          {" "}
          <Link to="/news">
            Show More <ArrowRightOutlined />
          </Link>{" "}
        </Text>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
