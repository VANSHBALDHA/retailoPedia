import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import footerLogo from "../../../assets/images/logo.jpg";
import copyImg from "../../../assets/images/Isolation_Mode.svg";
import facebook from "../../../assets/images/Facebook.png";
import twitter from "../../../assets/images/Twitter.svg";
import linkedin from "../../../assets/images/LinkedIn.png";
import instagram from "../../../assets/images/Instagram.png";
import google from "../../../assets/images/GooglePlus.svg";
import footerArrow from "../../../assets/images/FooterArrow.svg";

const socialLinks = [
  { icon: facebook, url: "https://facebook.com" },
  { icon: twitter, url: "https://twitter.com" },
  { icon: linkedin, url: "https://linkedin.com" },
  { icon: instagram, url: "https://instagram.com" },
  { icon: google, url: "https://plus.google.com" },
];

const footerData = [
  {
    title: "RETAILOPEDIA",
    links: ["Latest News", "All Topics", "About", "Contact Us", "Careers"],
  },
  { title: "PEOPLE", links: ["Search", "Trending Now", "Latest News"] },
  { title: "COMPANIES", links: ["Search", "Trending Now", "Latest News"] },
  { title: "BRANDS", links: ["Search", "Trending Now", "Latest News"] },
  { title: "TECH PARTNERS", links: ["Search", "Trending Now", "Latest News"] },
  { title: "MALLS", links: ["Search", "Trending Now", "Latest News"] },
  { title: "CONSULTANTS", links: ["Search", "Trending Now", "Latest News"] },
];

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.logoContent}>
          <img
            src={footerLogo}
            className={styles.footerLogo}
            alt="footer_logo"
          />
          <div>
            <span>Subscribe to our newsletter</span>
            <input
              type="email"
              className={styles.emailBox}
              placeholder="Enter e-mail"
            />
            <button className={styles.submitBtn}>
              SUBMIT <img src={footerArrow} alt="footer_arrow" />
            </button>
          </div>
        </div>
        <div>
          <div className={styles.footerMenu}>
            {footerData.map((section) => (
              <div>
                <h3>{section?.title}</h3>
                <div>
                  {section?.links.map((link, index) => (
                    <h5 key={index}>
                      <Link to="/profile">{link}</Link>
                    </h5>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.copyRightInfo}>
          <div className={styles.copyRightImage}>
            <img src={copyImg} alt="" />
            <span>© 2024 Retailopedia . All Rights Reserved.</span>
          </div>
          <div className={styles.socialMenu}>
            <span>FOLLOW US</span>
            <div className={styles.socialIcon}>
              {socialLinks.map(({ icon, url }, idx) => (
                <Link
                  key={idx}
                  to={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={`social-icon-${idx}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
