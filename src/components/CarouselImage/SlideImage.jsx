import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useStyles from "./slideImageStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "react-media";
const SlideImage = ({ images }) => {
  const classes = useStyles();

  const LongArrowRight = () => {
    return (
      <div className={classes.arrowRight}>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </div>
    );
  };

  const LongArrowLeft = () => {
    return (
      <div className={classes.arrowLeft}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </div>
    );
  };
  return (
    <div id="slideImage" className={classes.slideContainer}>
      <Slide
        nextArrow={LongArrowRight()}
        prevArrow={LongArrowLeft()}
        autoplay={false}
        transitionDuration={400}
        indicators={(i) => {
          return (
            <img
              key={images[i].id}
              className={classes.indicators}
              src={images[i].url}
              alt=""
            />
          );
        }}
      >
        {images.map((item) => {
          const { id, url } = item;
          return (
            <div key={id} className={classes.slide}>
              <Media
                queries={{
                  small: "(max-width: 599px)",
                  medium: "(min-width: 600px) and (max-width: 967px)",
                  large: "(min-width: 968px)",
                }}
              >
                {(matches) => (
                  <img
                    style={{ height: `${matches.small ? "50%" : "100%"}` }}
                    src={url}
                    alt=""
                  />
                )}
              </Media>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideImage;
