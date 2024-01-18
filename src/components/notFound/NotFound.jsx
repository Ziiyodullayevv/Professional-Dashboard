import React from "react";
import "./notFound.scss";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import { Divider } from "antd";
const NotFound = () => {
  return (
    <div className={"notFound"}>
      <div className={"notFound-text"}>
        <span className={"notFound-title"}>404</span>
        <Divider
          style={{
            height: "80px",
            margin: "0 20px",
          }}
          type={"vertical"}
        />{" "}
        <span className={"notFound-description"}>
          This page could not be found.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
