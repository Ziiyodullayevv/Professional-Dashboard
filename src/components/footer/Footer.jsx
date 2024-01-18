import React from "react";
import "./footer.scss";
const Footer = () => {
  const date = new Date().getFullYear();
  return <div className={"footer"}>Copyright &copy; Ninja Devs {date}</div>;
};

export default Footer;
