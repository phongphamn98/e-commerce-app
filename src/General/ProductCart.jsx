import React from "react";
import PhongDiv from "./PhongDiv";
import { makeStyles } from "@material-ui/styles";
import formatMoney from "./formatMoney";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  content: {
    "& p": {
      margin: 0,
      lineHeight: "20px",
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  productCart: {
    "&:hover": {
      "& .price": {
        //   transition: "all .2s linear",
        transform: "translateY(-10px)",
      },
      border: "1px solid black",
    },
    "& .price": {
      transition: "all .2s linear",
      // transform: "translateY(0px)",
    },
  },
}));

const ProductCart = ({ product }) => {
  const { poster, name, price } = product;
  const image = poster[0].url;
  const classes = useStyles();
  return (
    <PhongDiv
      border="1px solid white"
      fontsize="14px"
      cursor="pointer"
      transition="all .1s"
      height="100%"
      display="flex"
      flexdirection="column"
      width="100%"
      className={classes.productCart}
    >
      <PhongDiv
        position="relative"
        height="80%"
        display="flex"
        alignitems="center"
      >
        <img className={classes.image} src={image} alt="" />
        <PhongDiv
          padding="2px"
          boxsizing="border-box"
          backgroundcolor="#eceff1"
          position="absolute"
          bottom={0}
          left={10}
          className="price"
        >
          {formatMoney(price)}đ
        </PhongDiv>
      </PhongDiv>
      <PhongDiv
        texttransform="capitalize"
        backgroundcolor="#eceff1"
        className={classes.content}
        padding="10px"
      >
        <p>{name}</p>
        <p>Originals</p>
      </PhongDiv>
    </PhongDiv>
  );
};

export default ProductCart;
