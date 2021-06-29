import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  toggleWishList,
} from "../../../redux/actions/productActions";
import useStyles from "./OrderDetailStyles";
import _ from "lodash";

const ProductOrderDetail = ({ product }) => {
  const [size, setSize] = useState(0);
  const [productCart, setProductCart] = useState({});
  const { price, name, collections, rating } = product;
  const classes = useStyles();
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    const { _id, name, key, NSX, price, poster } = product;
    const prodObject = {
      _id,
      name,
      key,
      NSX,
      price,
      size: size,
      poster: poster[0].url,
    };
    setProductCart(prodObject);
  };

  useEffect(() => {
    if (!_.isEmpty(productCart)) dispatch(addToCart(productCart));
  }, [productCart]);

  return (
    <div className={classes.content}>
      <div className={classes.rating}>
        <div className={classes.collections}>{collections}</div>
        <div>star</div>
      </div>
      <Typography className={classes.title}>{name}</Typography>
      <div className={classes.color}>
        Cloud White / Purple Tint / Matte Gold
      </div>
      <div className={classes.price}>
        {new Intl.NumberFormat().format(price).replaceAll(",", ".")}đ
      </div>
      <div className={classes.selectSize}>chọn size</div>
      <div className={classes.sizeTable}>
        {product.size.map((item) => {
          return (
            <div
              key={item}
              className={classes.size + `${item === size ? " chosen" : ""}`}
              onClick={() => {
                setSize(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className={classes.buttonArea}>
        <div
          onClick={() => {
            if (!!size) {
              addProductToCart(product);
            }
          }}
          className={classes.btnOrder}
        >
          <div className={classes.btnText}>Thêm vào giỏ hàng</div>
          <IconButton className={classes.btnArrow}>
            <FontAwesomeIcon
              color="white"
              fontSize="30px"
              icon={faLongArrowAltRight}
            />
          </IconButton>
        </div>
        <div className={classes.wishList}>
          <IconButton
            aria-label="Add to Cart"
            onClick={(event) => {
              dispatch(toggleWishList(product));
            }}
          >
            <FavoriteBorderIcon className={classes.btnWishList} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderDetail;
