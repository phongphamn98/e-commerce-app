import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.poster[0].url}
        title={product.name}
      />
      <CardContent>
        <Typography className={classes.cardName} variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography className={classes.cardPrice} variant="h5">
          {new Intl.NumberFormat().format(product.price)}đ
        </Typography>
        {/* <Typography variant="h2">abc</Typography> */}
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button className={classes.btnBuy} variant="contained">
          Buy
        </Button>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
