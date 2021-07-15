import { Grid } from "@material-ui/core";
import React from "react";
import PhongDiv from "../../../General/PhongDiv";
import { makeStyles } from "@material-ui/styles";
import formatMoney from "../../../General/formatMoney";

const useStyles = makeStyles(() => ({}));
const OrderSingleProduct = ({ product }) => {
  const { name, poster, price, qty, size } = product;
  const classes = useStyles();
  return (
    <PhongDiv margin="20px 0 0 0">
      <Grid container>
        <Grid item xs={3} md={3} lg={3}>
          <PhongDiv height="0" padding="0 0 100% 0">
            <img style={{ width: "100%" }} src={poster} alt="" />
          </PhongDiv>
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <PhongDiv
            display="flex"
            flexdirection="column"
            justifycontent="space-between"
            fontsize="14px"
            margin="0 0 0 20px"
            height="100%"
          >
            <PhongDiv texttransform="capitalize">{name}</PhongDiv>
            <PhongDiv>
              <PhongDiv padding="0 0 5px 0">
                COLOUR: Legend Ink/Red/Yellow
              </PhongDiv>
              <div>
                KÍCH CỠ: {size}/Số lượng: {qty}
              </div>
            </PhongDiv>
            <PhongDiv>{formatMoney(price)}đ</PhongDiv>
          </PhongDiv>
        </Grid>
      </Grid>
    </PhongDiv>
  );
};

export default OrderSingleProduct;
