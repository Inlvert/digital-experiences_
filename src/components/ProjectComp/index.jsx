import React from "react";
import styles from "./ProjectComp.module.scss";
import { Slider } from "../Slider";
import ProjectImage1 from "./img/Project Image1.png";
import ProjectImage2 from "./img/Project Image2.png";
import ProjectImage3 from "./img/Project Image3.png";

const sliderData = [
  {
    img: ProjectImage1,
    description: "UrbanBlend",
    alt: "UrbanBlend",
  },

  {
    img: ProjectImage2,
    description: "TechInnovate",
    alt: "TechInnovate",
  },

  {
    img: ProjectImage3,
    description: "PlayfulPixels",
    alt: "PlayfulPixels",
  },
  
];

export default function ProjectComp() {
  return (
    <div className={styles.firstWrapper}>
      <div className={styles.wrapper}>
        ProjectComp
        <div className={styles.titleWrapper}>
          <div className={styles.leftText}>
            <p className={styles.text1}>projects</p>
            <div className={styles.wrapperText2}>
              <p className={styles.text2}>Where Code Meets Creativity</p>
            </div>
          </div>
        </div>
        <div className={styles.slideWrapper}>
          <Slider data={sliderData} />
        </div>
      </div>
    </div>
  );
}
