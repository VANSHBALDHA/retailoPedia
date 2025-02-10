import React from "react";
import styles from "./styles.module.css";
import footerLogo from "../../../assets/images/logo.jpg";
import copyImg from "../../../assets/images/Isolation_Mode.svg";
import facebook from "../../../assets/images/Facebook.png";
import twitter from "../../../assets/images/Twitter.svg";
import linkdlen from "../../../assets/images/LinkedIn.png";
import instagram from "../../../assets/images/Instagram.png";
import google from "../../../assets/images/GooglePlus.svg";
import footerArrow from "../../../assets/images/FooterArrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.logoContent}>
          <img src={footerLogo} className={styles.footerLogo}/>
          <div>
            <span>Subscribe to our newsletter</span>
            <input
              type="email"
              className={styles.emailBox}
              placeholder="Enter e-mail"
            />
            <button className={styles.submitBtn}>
              SUBMIT <img src={footerArrow} />
            </button>
          </div>
        </div>
        <div>
          <div className={styles.footerMenu}>
            <div>
              <h3>RETAILOPEDIA</h3>
              <div>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
                <h5>
                  <Link to="/profile">All Topics</Link>
                </h5>
                <h5>
                  <Link to="/profile">About</Link>
                </h5>
                <h5>
                  <Link to="/profile">Contact Us</Link>
                </h5>
                <h5>
                  <Link to="/profile">Careers</Link>
                </h5>
              </div>
            </div>
            <div>
              <h3>PEOPLE</h3>
              <div>
                <h5>
                  <Link to="/profile">Search</Link>
                </h5>
                <h5>
                  <Link to="/profile">Trending Now</Link>
                </h5>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
              </div>
            </div>
            <div>
              <h3>COMPANIES</h3>
              <div>
                <h5>
                  <Link to="/profile">Search</Link>
                </h5>
                <h5>
                  <Link to="/profile">Trending Now</Link>
                </h5>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
              </div>
            </div>
            <div>
              <h3>BRANDS</h3>
              <div>
                <h5>
                  <Link to="/profile">Search</Link>
                </h5>
                <h5>
                  <Link to="/profile">Trending Now</Link>
                </h5>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
              </div>
            </div>
            <div>
              <h3>TECH PARTNERS</h3>
              <div>
                <h5>
                  <Link to="/profile">Search</Link>
                </h5>
                <h5>
                  <Link to="/profile">Trending Now</Link>
                </h5>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
              </div>
            </div>
            <div>
              <h3>MALLS</h3>
              <div>
                <h5>
                  <Link to="/profile">Search</Link>
                </h5>
                <h5>
                  <Link to="/profile">Trending Now</Link>
                </h5>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
              </div>
            </div>
            <div>
              <h3>CONSULTANTS</h3>
              <div>
                <h5>
                  <Link to="/profile">Search</Link>
                </h5>
                <h5>
                  <Link to="/profile">Trending Now</Link>
                </h5>
                <h5>
                  <Link to="/profile">Latest News</Link>
                </h5>
              </div>
            </div>
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
              <Link to="/profile">
                <img src={facebook} alt="" />
              </Link>
              <Link to="/profile">
                <img src={twitter} alt="" />
              </Link>
              <Link to="/profile">
                <img src={linkdlen} alt="" />
              </Link>
              <Link to="/profile">
                <img src={instagram} alt="" />
              </Link>
              <Link to="/profile">
                <img src={google} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
