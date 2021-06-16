import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../Assets/commerce.png";
import useStyles from "./navStyles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state) => state.carts);
  const wishList = useSelector((state) => state.wishList);

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} corlor="inherit">
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
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={carts.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
