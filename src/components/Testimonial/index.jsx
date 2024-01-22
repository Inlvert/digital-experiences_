import React from "react";
import styles from "./Testimonial.module.scss";
import TestimonialCardImg1 from "../TestimonialCard/img/TestimonialCard.png";
import TestimonialCardImg2 from "../TestimonialCard/img/TestimonialCard2.png";
import { TestimonialCard } from "../TestimonialCard";
import Svg1 from "../TestimonialCard/svg/1.svg";
import Svg2 from "../TestimonialCard/svg/2.svg";

const dataTestimonial = [
  {
    name: "Emily Thompson",
    description:
      "“Sarah elevated our brand with her precision front-end development. The seamless blend of technology and design exceeded our expectations. Choosing her was an investment in excellence—we highly recommend her for exceptional digital experiences.”",
    jobPosition: "CEO, InnovateTech Solutions",
    img: TestimonialCardImg1,
    svg: Svg1,
  },

  {
    name: "Jessica Carter",
    description:
      "“The attention to detail and innovative touch she brought to our project exceeded our expectations. Her ability to weave intricate code with creative design transformed our website into a user-friendly masterpiece.”",
    jobPosition: "Marketing Manager, TechInnovate Co.",
    img: TestimonialCardImg2,
    svg: Svg2,
  },
  
];

export default function Testimonial() {
  return (
    <div className={styles.firstWrapper}>
      <div className={styles.pageWrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.leftTextWrapper}>
            <p className={styles.firstTextWrapper}>tetimonials</p>
            <h2 className={styles.secondTextWrapper}>What client’s say</h2>
          </div>
        </div>
        <div className={styles.testimonialCardsWrapper}>
          <TestimonialCard dataTestimonial={dataTestimonial} />
        </div>
      </div>
    </div>
  );
}
