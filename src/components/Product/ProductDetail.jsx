import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../../redux/actions/productActions";
import SlideImage from "../CarouselImage/SlideImage";
import InfomationArea from "./Detail/InfomationArea";
import useStyles from "./productDetailStyles";
import ProductOrderDetail from "./ProductOrderDetail/ProductOrderDetail";
import ProductOrderTab from "./Tab/ProductOrderTab";
import Media from "react-media";

const ProductDetail = () => {
  const { productId } = useParams();
  const classes = useStyles();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await fetch(
      `https://api-kaito-shop.herokuapp.com/api/products/get-one-product?id=${productId}`
    );
    return response.json();
  };

  useEffect(() => {
    const res = fetchProduct();
    res.then((res) => dispatch(selectedProducts(res.product)));
  }, []);

  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 959px)",
        large: "(min-width: 960px)",
      }}
    >
      {(matches) => (
        <div className={classes.content}>
          {!_.isEmpty(product) ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <SlideImage images={product.poster} />
                {matches.small || matches.medium ? (
                  <ProductOrderDetail product={product} />
                ) : null}
                <ProductOrderTab />
                <InfomationArea />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                {matches.large ? (
                  <ProductOrderDetail product={product} />
                ) : null}
              </Grid>
            </Grid>
          ) : null}
        </div>
      )}
    </Media>
  );
};

export default ProductDetail;
