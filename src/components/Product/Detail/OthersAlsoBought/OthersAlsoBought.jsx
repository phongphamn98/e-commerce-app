import React from "react";
import PhongDiv from "../../../../General/PhongDiv";
import useStyles from "./ortherAlsoBought";
import OtherBoughtSlide from "./OtherBoughtSlide";

const OthersAlsoBought = () => {
  const classes = useStyles();
  return (
    <PhongDiv>
      <PhongDiv
        fontsize="26px"
        lineheight="24px"
        fontweight="600"
        margin="50px 0 20px 0"
        texttransform="uppercase"
      >
        others also bought
      </PhongDiv>
      <OtherBoughtSlide />
    </PhongDiv>
  );
};

export default OthersAlsoBought;
