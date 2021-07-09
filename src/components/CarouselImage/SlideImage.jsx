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
import PhongDiv from "../../General/PhongDiv";
const SlideImage = ({ images }) => {
  const classes = useStyles();

  const LongArrowRight = (matches) => {
    return (
      <PhongDiv
        margin={matches.small ? "0" : "0 20px"}
        className={classes.arrowRight}
      >
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </PhongDiv>
    );
  };

  const LongArrowLeft = (matches) => {
    return (
      <PhongDiv
        margin={matches.small ? "0" : "0 20px"}
        className={classes.arrowLeft}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </PhongDiv>
    );
  };
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 967px)",
        large: "(min-width: 968px)",
      }}
    >
      {(matches) => (
        <div id="slideImage" className={classes.slideContainer}>
          <Slide
            prevArrow={LongArrowLeft(matches)}
            nextArrow={LongArrowRight(matches)}
            autoplay={false}
            transitionDuration={400}
            // slidesToShow={2}
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
                  <img
                    style={{
                      height: `${matches.small ? "unset" : "unset"}`,
                      width: `${matches.small ? "50%" : "70%"}`,
                    }}
                    src={url}
                    alt=""
                  />
                </div>
              );
            })}
          </Slide>
        </div>
      )}
    </Media>
  );
};

export default SlideImage;
