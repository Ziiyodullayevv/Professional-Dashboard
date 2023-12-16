import React from "react";
import logo from "../../assets/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className={"header-nav"}>
      <div className={"logo"}>
        <img src={logo} alt="logo" />
        <span className={"logo-text"}>MarketBook</span>
      </div>
      <div className={"header-gmail"}>ninjadevs@gmail.com</div>
    </div>
  );
};
export default Header;
