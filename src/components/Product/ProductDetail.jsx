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
    <div className={classes.content}>
      {/* <CarouselImage /> */}
      {/* <div className={classes.slideImage}>
        
      </div> */}
      {!_.isEmpty(product) ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <SlideImage images={product.poster} />
            <ProductOrderTab />
            <InfomationArea />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ProductOrderDetail product={product} />
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};

export default ProductDetail;
