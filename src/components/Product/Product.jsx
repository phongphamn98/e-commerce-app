import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import { useDispatch } from "react-redux";
import { AddToCarts, AddToWishList } from "../../actions";
import useStyles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Product = ({ product }) => {
  const dispath = useDispatch();

  const classes = useStyles();
  return (
    //click sẽ chuyển sang một trang mới để mua hàng
    <Card className={classes.root}>
      <div className={classes.cartMedia}>
        <CardMedia
          className={classes.media}
          image={product.poster[0].url}
          title={product.name}
        />
        {product.wishList ? (
          <IconButton
            className={classes.btnWishList}
            aria-label="Add to Cart"
            onClick={() => dispath(AddToWishList(product))}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            className={classes.btnWishList}
            aria-label="Add to Cart"
            onClick={() => dispath(AddToWishList(product))}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <CardContent>
        <Typography className={classes.cardName} variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography className={classes.cardPrice} variant="h5">
          {new Intl.NumberFormat().format(product.price)}đ
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
