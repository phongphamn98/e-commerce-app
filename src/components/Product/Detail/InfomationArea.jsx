import React from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import PhongDiv from "../../../General/PhongDiv";
import Description from "./Description/Description";
import useStyles from "./infomationAreaStyles";
import OthersAlsoBought from "./OthersAlsoBought/OthersAlsoBought";
import ReplaceArea from "./ReplaceArea";
import Specifications from "./Specifications/Specifications";

const InfomationArea = ({ otherProducts }) => {
  const classes = useStyles();
  const product = useSelector((state) => state.product);

  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1379px)",
        large: "(min-width: 1380px)",
      }}
    >
      {(matches) => (
        <div className={classes.container}>
          <PhongDiv
            padding={matches.large ? "0 5px" : "0 15px"}
            width={matches.large ? "60%" : "100%"}
            boxsizing="border-box"
          >
            <ReplaceArea idName="productDescription" />
            <Description product={product} />
            <ReplaceArea idName="specifications" />
            <Specifications />
            <OthersAlsoBought otherProducts={otherProducts} />
            {/* <ReactSlick /> */}
          </PhongDiv>
        </div>
      )}
    </Media>
  );
};

export default InfomationArea;
