import React from "react";
import styles from "./TestimonialCard.module.scss";

export const TestimonialCard = ({ dataTestimonial }) => {
  return (
    <div className={styles.allWrapper}>
      {dataTestimonial.map((imgCard, index) => (
        <div className={styles.testimonialCardWrapper}>
          <div className={styles.testimonialCard}>
            <img src={imgCard.img} alt={imgCard.jobPosition} />
            <div className={styles.textWrapper}>
              <img src={imgCard.svg} alt={imgCard.jobPosition} />
              <p className={styles.textDescription}>
                {imgCard.description}
              </p>
              <div className={styles.itemWrapper}>
                <div className={styles.subtitle}>
                  <p className={styles.textName}>Emily Thompson</p>
                </div>
                <div className={styles.smallText}>
                  <p className={styles.textjob}>{imgCard.jobPosition}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
