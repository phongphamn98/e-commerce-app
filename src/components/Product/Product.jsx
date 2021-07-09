import { Card, CardContent, CardMedia, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import formatMoney from "../../General/formatMoney";
import PhongDiv from "../../General/PhongDiv";
import { toggleWishList } from "../../redux/actions/productActions";
import useStyles from "./styles";

const Product = ({ isChangeImage, product }) => {
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    setImg(product.poster[0].url);
  }, []);
  const redirect = () => {
    history.push(`/product/${product._id}`);
  };
  return (
    <Card
      onMouseEnter={isChangeImage ? () => setImg(product.poster[1].url) : null}
      onMouseLeave={isChangeImage ? () => setImg(product.poster[0].url) : null}
      onClick={redirect}
      className={classes.root}
    >
      <PhongDiv
        height={!isChangeImage ? "70%" : "unset"}
        className={classes.cartMedia}
      >
        <CardMedia
          component={Link}
          to={`/product/${product._id}`}
          className={classes.media}
          image={img}
          title={product.name}
        />
        {isChangeImage ? (
          product.wishList === true ? (
            <IconButton
              className={classes.btnWishList}
              aria-label="Remove from WishList"
              onClick={(event) => {
                event.isPropagationStopped();
                dispatch(toggleWishList(product));
              }}
            >
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.btnWishList}
              aria-label="Add to WishList"
              onClick={(event) => {
                event.stopPropagation();
                dispatch(toggleWishList(product));
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          )
        ) : null}
        <PhongDiv
          className="price"
          display="inline-block"
          padding="2px"
          backgroundcolor="#eceff1"
          bottom="-4px"
          left="5px"
          position="absolute"
        >
          {formatMoney(product.price)}đ
        </PhongDiv>
      </PhongDiv>
      <CardContent className={classes.link}>
        <PhongDiv fontsize="15px" texttransform="capitalize" lineheight="20px">
          {product.name}
        </PhongDiv>
        <PhongDiv fontsize="15px" texttransform="capitalize" lineheight="20px">
          {product.sex.replace(", ", " - ")}
        </PhongDiv>
      </CardContent>
    </Card>
    //  </Link>
  );
};

export default Product;
