import { Grid, IconButton, InputBase, withStyles } from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import formatMoney from "../../../General/formatMoney";
import {
  changeQtyProduct,
  removeFromCart,
} from "../../../redux/actions/productActions";
import useStyles from "./CartItemStyles";
import PhongDiv from "../../../General/PhongDiv";
import { useHistory } from "react-router";
import ContainerWithBorder from "../../../General/ContainerWithBorder";
const CartItem = ({ prod }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(prod.qty);

  const onChangeQty = (e) => {
    setQty(e.target.value);
    dispatch(changeQtyProduct(prod, parseInt(e.target.value)));
  };

  const history = useHistory();

  const redirect = () => {
    history.push(`/product/${prod._id}`);
  };

  const classes = useStyles();
  return (
    <ContainerWithBorder>
      <div className={classes.content}>
        <div className={classes.image}>
          <img alt="" src={prod.poster} />
        </div>
        <div className={classes.cartItemDetail}>
          <Grid container>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <div className={classes.info}>
                <div className={classes.nameAndPrice}>
                  <PhongDiv
                    cursor="pointer"
                    onClick={redirect}
                    className={classes.name}
                  >
                    {prod.name}
                  </PhongDiv>
                  <div>{formatMoney(prod.price)}₫</div>
                </div>
                <div className={classes.color}>
                  <span>Legend Ink/Red/Yellow</span>
                </div>
                <div className={classes.size}>Kích cỡ: {prod.size}</div>
              </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div className={classes.button}>
                <IconButton
                  onClick={() => {
                    dispatch(removeFromCart(prod));
                  }}
                  className={classes.clearButton}
                >
                  <ClearIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <div className={classes.quantity}>
            <NativeSelect
              id="demo-customized-select-native"
              value={qty}
              className={classes.selectQuantity}
              onChange={(e) => {
                onChangeQty(e);
              }}
              inputProps={{ height: "20px" }}
              input={<BootstrapInput />}
            >
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </NativeSelect>
          </div>
        </div>
      </div>
    </ContainerWithBorder>
  );
};
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: "relative",
    border: "1px solid black",
    width: "70px",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      borderColor: "black",
      backgroundColor: "white",
      // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default CartItem;
