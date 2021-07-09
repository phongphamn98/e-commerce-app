import { Typography } from "@material-ui/core";
import React from "react";
import formatMoney from "../../../General/formatMoney";
import PhongDiv from "../../../General/PhongDiv";
import useStyles from "./OrderDetailStyles";
import Media from "react-media";
const NameAndPrice = ({ collections, name, price }) => {
  const classes = useStyles();
  return (
    <Media
      queries={{
        medium: "(max-width: 967px)",
        large: "(min-width: 968px)",
      }}
    >
      {(matches) => (
        <PhongDiv padding={!matches.large ? "20px" : 0}>
          <div className={classes.rating}>
            <div className={classes.collections}>{collections}</div>
            <div>star</div>
          </div>
          <Typography className={classes.title}>{name}</Typography>
          <PhongDiv className={!matches.large ? classes.displayPrice : null}>
            <div className={classes.color}>
              Cloud White / Purple Tint / Matte Gold
            </div>
            <PhongDiv
              fontweight="bold"
              margin={!matches.large ? "0 0 20px 0" : "20px 0"}
            >
              {formatMoney(price)}đ
            </PhongDiv>
          </PhongDiv>
        </PhongDiv>
      )}
    </Media>
  );
};

export default NameAndPrice;
