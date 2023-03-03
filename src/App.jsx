import React, { Component } from "react";
import { Layout, Typography, Space } from "antd";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import {
  Navbar,
  Homepage,
  CryptoCurrencies,
  CyptoDetails,
  Exchanges,
  News,
  NotFound,
} from "./components/index";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path="/exchanges" component={Exchanges} />
              <Route path="/cryptocurrencies" component={CryptoCurrencies} />
              <Route path="/news" component={News} />
              <Route exact path="/crypto/:coinId" component={CyptoDetails} />
              <Route path="/" exact component={Homepage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Text style={{ color: "#001529", textAlign: "center" }}>
            Crypto Money &copy; All right reserverd
          </Typography.Text>
          <Space>
            <Link className="footer__link" to="/">
              Home
            </Link>
            <Link className="footer__link" to="/cryptocurrencies">
              Cryptocurrencies
            </Link>
            <Link className="footer__link" to="/exchanges">
              Exchanges
            </Link>
            <Link className="footer__link" to="/news">
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
