import {
  faLongArrowAltRight,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  toggleWishList,
} from "../../../redux/actions/productActions";
import useStyles from "./OrderDetailStyles";
import SizeChartModal from "./SizeChartModal/SizeChartModal";
import PhongDiv from "../../../General/PhongDiv";
import Media from "react-media";
import OrderModal from "../OrderModal/OrderModal";
import formatMoney from "../../../General/formatMoney";
import { Link } from "react-router-dom";

const ProductOrderDetail = ({ product, isSticky }) => {
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
  const handleSize = () => {
    setSize(1);
  };
  return (
    <Media
      queries={{
        medium: "(max-width: 967px)",
        large: "(min-width: 968px)",
      }}
    >
      {(matches) => (
        <PhongDiv
          className={classes.content}
          height={matches.medium ? "unset" : "100vh"}
          position={matches.medium ? "unset" : "sticky"}
        >
          <div className={classes.rating}>
            <div className={classes.collections}>{collections}</div>
            <div>star</div>
          </div>
          <Typography className={classes.title}>{name}</Typography>
          <div className={classes.color}>
            Cloud White / Purple Tint / Matte Gold
          </div>
          <div className={classes.price}>{formatMoney(price)}đ</div>
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
          {size === 1 ? (
            <PhongDiv margin="5px 0" color="red" fontSize="14px">
              Vui lòng chọn size của bạn.
            </PhongDiv>
          ) : null}

          <SizeChartModal />
          <div className={classes.buttonArea}>
            <OrderModal
              addProductToCart={addProductToCart}
              product={product}
              size={size}
              handleSize={handleSize}
            />
            <div className={classes.wishList}>
              <IconButton aria-label="Add to Cart" component={Link} to="/">
                <FavoriteBorderIcon className={classes.btnWishList} />
              </IconButton>
            </div>
          </div>
        </PhongDiv>
      )}
    </Media>
  );
};

export default ProductOrderDetail;
