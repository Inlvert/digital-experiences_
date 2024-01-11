import React from "react";
import styles from "./ServicesComp.module.scss";
import classNames from "classnames";
import { ReactComponent as Circul6 } from "./svg/circul6.svg";
import { ReactComponent as Circul7 } from "./svg/circul7.svg";

export default function ServicesComp() {
  const className = classNames(styles.serviceCard1, styles.cardLayout);
  const classNameDubl2 = classNames(styles.serviceCard2, styles.cardLayout);
  const classNameDubl3 = classNames(styles.serviceCard3, styles.cardLayout);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Circul6 className={styles.circule6} />
        <Circul7 className={styles.circule7} />
        <div className={styles.headerWrapper}>
          <text className={styles.tagText}>services</text>
          <h2 className={styles.tagH2}>My expertise</h2>
        </div>
        <div className={styles.cardWrapper}>
          <div className={className}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
            >
              <path
                d="M38.25 14.7273L50 26.5L38.25 38.2727M14.75 38.2727L3 26.5L14.75 14.7273M31.5357 8L21.4643 45"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className={styles.serviceText}>
              <h3 className={styles.serviceH3}>Development</h3>
              <p className={styles.serviceParagraf}>
                Meticulous front-end development, ensuring every line of code is
                a pixel-perfect masterpiece.
              </p>
            </div>
          </div>
          <div className={classNameDubl2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
            >
              <path
                d="M34.043 11.5686C37.9115 13.2986 41.0698 16.3046 42.9901 20.0845C44.9105 23.8644 45.4766 28.1892 44.594 32.3366C43.7114 36.4839 41.4334 40.2026 38.1407 42.8715C34.8479 45.5403 30.7398 46.9976 26.5026 47C22.8782 46.9998 19.3336 45.9345 16.3089 43.9362C13.2843 41.9378 10.9126 39.0945 9.48841 35.7592C8.06421 32.4239 7.65018 28.7435 8.29771 25.1748C8.94523 21.6061 10.6258 18.3063 13.1308 15.685C14.857 18.0972 17.1348 20.0611 19.7741 21.4129C19.8203 18.4471 20.5199 15.528 21.8229 12.8638C23.1259 10.1997 25.0002 7.85601 27.3122 6C29.0768 8.36836 31.3845 10.2775 34.0407 11.5663L34.043 11.5686Z"
                stroke="#1B1B1B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.5022 41C29.6589 40.9992 31.7347 40.1751 33.3091 38.6948C34.8834 37.2144 35.8387 35.1884 35.9814 33.0272C36.124 30.8659 35.4434 28.731 34.0774 27.0549C32.7113 25.3787 30.762 24.2867 28.6243 24C26.2839 26.1032 24.7417 28.9562 24.2605 32.0731C22.5142 31.6441 20.8704 30.8701 19.4251 29.7964C19.0054 31.0788 18.8944 32.4429 19.1013 33.7767C19.3082 35.1105 19.8271 36.376 20.6154 37.4694C21.4036 38.5627 22.4388 39.4528 23.6359 40.0666C24.8331 40.6803 26.1581 41.0002 27.5022 41Z"
                stroke="#1B1B1B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className={styles.serviceText}>
              <h3 className={styles.serviceH3_2}>Web Design</h3>
              <p className={styles.serviceParagraf_2}>
                Meticulous front-end development, ensuring every line of code is
                a pixel-perfect masterpiece.
              </p>
            </div>
          </div>
          <div className={classNameDubl3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
            >
              <path
                d="M35.451 23.6154V13.4615C35.451 11.2174 34.5607 9.06517 32.976 7.47833C31.3913 5.89148 29.2421 5 27.001 5C24.7599 5 22.6106 5.89148 21.026 7.47833C19.4413 9.06517 18.551 11.2174 18.551 13.4615V23.6154M44.1398 19.1184L46.9857 46.1953C47.1435 47.6958 45.9718 49 44.4643 49H9.53771C9.18215 49.0004 8.83049 48.9259 8.50557 48.7813C8.18065 48.6367 7.88974 48.4253 7.65173 48.1608C7.41372 47.8963 7.23394 47.5846 7.12407 47.246C7.0142 46.9073 6.97669 46.5494 7.01398 46.1953L9.86219 19.1184C9.92789 18.4946 10.2219 17.9173 10.6875 17.4977C11.1531 17.0781 11.7573 16.846 12.3837 16.8462H41.6183C42.9162 16.8462 44.0046 17.8277 44.1398 19.1184ZM19.396 23.6154C19.396 23.8398 19.307 24.055 19.1485 24.2137C18.9901 24.3724 18.7751 24.4615 18.551 24.4615C18.3269 24.4615 18.112 24.3724 17.9535 24.2137C17.795 24.055 17.706 23.8398 17.706 23.6154C17.706 23.391 17.795 23.1757 17.9535 23.0171C18.112 22.8584 18.3269 22.7692 18.551 22.7692C18.7751 22.7692 18.9901 22.8584 19.1485 23.0171C19.307 23.1757 19.396 23.391 19.396 23.6154ZM36.296 23.6154C36.296 23.8398 36.2069 24.055 36.0485 24.2137C35.89 24.3724 35.6751 24.4615 35.451 24.4615C35.2269 24.4615 35.0119 24.3724 34.8535 24.2137C34.695 24.055 34.606 23.8398 34.606 23.6154C34.606 23.391 34.695 23.1757 34.8535 23.0171C35.0119 22.8584 35.2269 22.7692 35.451 22.7692C35.6751 22.7692 35.89 22.8584 36.0485 23.0171C36.2069 23.1757 36.296 23.391 36.296 23.6154Z"
                stroke="#1B1B1B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className={styles.serviceText}>
              <h3 className={styles.serviceH3_2}>E-commerce</h3>
              <p className={styles.serviceParagraf_2}>
                Meticulous front-end development, ensuring every line of code is
                a pixel-perfect masterpiece.
              </p>
            </div>
          </div>
        </div>
        <a href="##" className={styles.btn}>
          Get in touch!
        </a>
      </div>
    </div>
  );
}
