import React from "react";
import styles from "./styles.module.css";
import footerLogo from "../../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="">
              <img src={footerLogo} className="w-100" />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
