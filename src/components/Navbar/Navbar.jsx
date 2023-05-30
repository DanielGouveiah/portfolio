import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoMobile } from "../../assets/logo-2.svg";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a
        href="/"
        className={styles.logo}>
        <Logo />
      </a>
      <a
        href="/"
        className={styles.logoMobile}>
        <LogoMobile />
      </a>
      <Menu />
    </nav>
  );
};

export default Navbar;
