import React from "react";
import styles from "./Contact.module.scss";

function ContactComp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactSection}>
        <div className={styles.textWrapper}>
          <p className={styles.textContact}>consstact</p>
          <div className={styles.text}>
            <h2 className={styles.heading2}>Ready to start your project?</h2>
            <p className={styles.paragraph}>
              Dive into a world where technology and artistry converge,
              elevating online interactions and setting new standards for
              digital excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
