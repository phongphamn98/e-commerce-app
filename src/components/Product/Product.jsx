import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, toggleWishList } from "../../redux/actions/productActions";
import useStyles from "./styles";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.cartMedia}>
        <CardMedia
          component={Link}
          to={`/product/${product._id}`}
          className={classes.media}
          image={product.poster[0].url}
          title={product.name}
        />
        {product.wishList === true ? (
          <IconButton
            className={classes.btnWishList}
            aria-label="Remove from WishList"
            onClick={(event) => {
              event.isPropagationStopped();
              dispatch(toggleWishList(product));
              //   dispatch(addToCart(product));
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
              //   dispatch(addToCart(product));
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <CardContent
        className={classes.link}
        component={Link}
        to={`/product/${product._id}`}
      >
        <Typography className={classes.cardName} variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography className={classes.cardPrice} variant="h5">
          {new Intl.NumberFormat().format(product.price)}đ
        </Typography>
      </CardContent>
    </Card>
    //  </Link>
  );
};

export default Product;
