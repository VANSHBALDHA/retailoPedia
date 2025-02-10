import React from "react";
import styles from "./styles.module.css";
import headerLogo from "../../../assets/images/logo.jpg";
import mobileIcon from "../../../assets/images/mobile.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <div className={styles.container}>
          <Navbar.Brand href="#home" className={styles.profileLogoContent}>
            <img src={headerLogo} className={styles.headerLogo} />
            <span className={styles.logoText}>Stories. Strategies. Connections.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles.navbarNav} ms-auto`}>
              <Nav.Link href="#people">People</Nav.Link>
              <Nav.Link href="#companies">Companies</Nav.Link>
              <Nav.Link href="#retailers">Retailers</Nav.Link>
              <Nav.Link href="#retail-enablers">Retail Enablers</Nav.Link>
              <Nav.Link href="#shopping-centers">Shopping Centers</Nav.Link>
              <Nav.Link href="#consultants">Consultants</Nav.Link>
              <Nav.Link href="#consultants" className={styles.getTheApp}>
                <div />
                <p className="m-0">Get the app</p>
                <div />
              </Nav.Link>
              <Nav.Link href="#consultants">
                <button
                  className={`${styles.headerButton} ${styles.joinButton}`}
                >
                  Join now
                </button>
              </Nav.Link>
              <Nav.Link href="#consultants">
                <button className={`${styles.signInButton}`}>Sign in</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
