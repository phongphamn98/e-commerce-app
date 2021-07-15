import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Assets/commerce.png";
import PhongDiv from "../../General/PhongDiv";
import { useAuth } from "./../../Context/AuthContext";
import useStyles from "./navStyles";

const Navbar = () => {
  const classes = useStyles();
  const wishList = useSelector((state) => state.allProducts.wishList);
  const carts = useSelector((state) => state.allProducts.carts);
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("Failed to logout");
    }
  };
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
        <PhongDiv display="flex" alignitems="center" className={classes.button}>
          {currentUser && <span>Xin chào {currentUser.email}</span>}
          <span className={classes.signin} onClick={handleLogout}>
            {currentUser ? `Đăng xuất` : "Đăng nhập"}
          </span>
          {/* <ButtonWithArrow
            text={currentUser ? "Logout" : "Login"}
            isBlackBackground={true}
            onClick={handleLogout}
          /> */}
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
        </PhongDiv>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
