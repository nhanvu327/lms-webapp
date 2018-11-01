import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import { Copyright } from "./styles/Footer";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/">Help</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Terms</Link>
      </div>
      <Copyright>
        Copyright <Icon type="copyright" theme="outlined" /> 2018 - Nhan Vu
      </Copyright>
    </footer>
  );
};

export default Footer;