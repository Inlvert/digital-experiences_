import React from "react";
import styles from "./Footer.module.scss";
import Icon1 from "../Footer/svg/icon1.svg";
import Icon2 from "../Footer/svg/icon2.svg";
import Icon3 from "../Footer/svg/icon3.svg";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <p className={styles.footerLeftText}>
        All rights reserved @examplecompany{" "}
      </p>
      <div className={styles.socialLinkWrapper}>
        <a href="##">
          <img src={Icon1} alt="Icon1" className={styles.icon} />
        </a>
        <a href="##">
          <img src={Icon2} alt="Icon2" className={styles.icon} />
        </a>
        <a href="##">
          <img src={Icon3} alt="Icon3" className={styles.icon} />
        </a>
      </div>
      <div className={styles.linkWrapper}>
        <a href="##" className={styles.link}>
          Cookie Policy
        </a>
        <a href="##" className={styles.link}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
