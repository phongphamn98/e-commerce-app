import React from "react";
import PhongDiv from "../../../General/PhongDiv";
import { Typography } from "@material-ui/core";
import ButtonWithArrow from "../../../General/ButtonWithArrow";
import useStyles from "./cartNoItemStyles";

const CartNoItem = ({ matches }) => {
  const classes = useStyles();
  return (
    <PhongDiv display="flex" flexdirection="column" flexgap="1em">
      <Typography
        className={classes.myCart}
        variant={matches.large ? "h4" : "h5"}
      >
        Túi của bạn trống
      </Typography>
      <PhongDiv>
        Once you add something to your bag - it will appear here. Ready to get
        started?
      </PhongDiv>
      <PhongDiv width={"50%"}>
        <ButtonWithArrow goTo="/" text="Get started" isBlackBackground={true} />
      </PhongDiv>
    </PhongDiv>
  );
};

export default CartNoItem;
