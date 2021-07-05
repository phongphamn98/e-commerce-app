import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { forEach } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Assets/commerce.png";
import useStyles from "./navStyles";

const Navbar = () => {
  const [countCart, setCountCart] = useState(0);
  const classes = useStyles();
  const wishList = useSelector((state) => state.allProducts.wishList);
  const carts = useSelector((state) => state.allProducts.carts);
  //   useEffect(() => {
  //     let count = 0;
  //     for (let item of carts.listProduct) {
  //       count += item.qty;
  //     }
  //     setCountCart(count);
  //   }, [carts.listProduct, countCart]);

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          corlor="inherit"
        >
          <img
            src={logo}
            alt="Commerce.js"
            height="25px"
            className={classes.image}
          />
          Commerce.js
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          {wishList.length != 0 ? (
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={wishList.length} color="secondary">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
          ) : null}
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={carts.totalItem} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
