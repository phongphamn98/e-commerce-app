import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "images/slide_2.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg",
];

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <span>Slide 1</span>
        </div>
        <div className="each-slide">
          <span>Slide 2</span>
        </div>
        <div className="each-slide">
          <span>Slide 3</span>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
