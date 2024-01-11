import React from "react";
import styles from "./AboutMe.module.scss";
import AboutMeImage from "./AboutMeImage.png";
import { ReactComponent as Circule4 } from "./svg/circul4.svg";
import { ReactComponent as Circule5 } from "./svg/circul5.svg";

export default function AbotuMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textColumn}>
        <text className={styles.tagText}>About me</text>
        <h2 className={styles.textH2}>
          Expert Front-End{"\n"}Developer Blending Art and Technology
        </h2>
        <p className={styles.textParagraf}>
          I'm Sarah Mitchell, a front-end developer in NYC with a Computer
          Science degree. I specialize in creating visually appealing,
          user-friendly websites, blending technical skill with artistic design.
          I stay current with industry trends for seamless, client-friendly
          development.
        </p>
        <div className={styles.itemWrapper}>
          <div className={styles.item}>
            <h2 className={styles.itemH2}>150+</h2>
            <text className={styles.itemText}>lines of code</text>
          </div>
          <div className={styles.item}>
            <h2 className={styles.itemH2}>10+</h2>
            <text className={styles.itemText}>lines of code</text>
          </div>
          <div className={styles.item}>
            <h2 className={styles.itemH2}>∞</h2>
            <text className={styles.itemText}>lines of code</text>
          </div>
        </div>
      </div>
      <div className={styles.positionDiv}>
        <img src={AboutMeImage} alt="portlandlogo" />
        <Circule4 className={styles.circule4} />
        <Circule5 className={styles.circule5} />
      </div>
    </div>
  );
}
