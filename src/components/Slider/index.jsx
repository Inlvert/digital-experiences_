import React, { useState } from "react";
import "./Slide.css";

export const Slider = (props) => {
  const { data } = props;
  const [activeId, setActiveId] = useState(0);

  const prefSlide = () => {
    setActiveId(activeId => {
      if (activeId > 0) {
        return activeId - 1
      }
      return activeId
    })
  }

  const nextSlide = () => {
    setActiveId(activeId => {
      if (activeId < data.length - 1) {
        return activeId + 1
      }
      return activeId
    })
  }
  

  return (
    <div>
      Sliderrr
      <div className="action">
        <div className="prev" onClick={prefSlide} />
        <div className="next" onClick={nextSlide} />
      </div>
      <div className="slider">
        {data.map((slide, index) => (
          <div className={`slide${index === activeId ? 'active' : ''}`}>
            <img src={slide.img} alt={slide.alt} />
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
