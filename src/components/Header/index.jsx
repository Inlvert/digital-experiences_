import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as CicrulSvg } from "./svg/circul1.svg";
import { ReactComponent as CicrulSvg2 } from "./svg/circul2.svg";
import { ReactComponent as CicrulSvg3 } from "./svg/circul3.svg";

function Header() {
  return (
    <div className={styles.layout}>
      <CicrulSvg className={styles.circleOne} />
      <CicrulSvg2 className={styles.circletwo} />
      <CicrulSvg3 className={styles.circlethree} />
      <div className={styles.boxGreeting}>
        <h1 className={styles.greetingText}>
          Weaving Digital Experiences with{"\n"}Pixel Perfection
        </h1>
        <p className={styles.smallText}>
          Transforming ideas into visually stunning designs while crafting{"\n"}
          user-friendly websites with a touch of innovation.
        </p>
        <a href="##" className={styles.btn}>
          Get in touch!
        </a>
      </div>
    </div>
  );
}

export default Header;
