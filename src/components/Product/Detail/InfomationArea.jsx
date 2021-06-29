import React from "react";
import useStyles from "./infomationAreaStyles";
import ReplaceArea from "./ReplaceArea";
import Description from "./Description/Description";
import { useSelector } from "react-redux";
import Specifications from "./Specifications/Specifications";

const InfomationArea = () => {
  const classes = useStyles();
  const product = useSelector((state) => state.product);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <ReplaceArea idName="productDescription" />
        <Description product={product} />
        <ReplaceArea idName="specifications" />
        <Specifications />
      </div>
    </div>
  );
};

export default InfomationArea;
