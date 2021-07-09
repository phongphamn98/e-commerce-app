import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import PhongDiv from "../../General/PhongDiv";
import { selectedProducts } from "../../redux/actions/productActions";
import SlideImage from "../CarouselImage/SlideImage";
import { OtherProductsContext } from "./../../Context/OtherProductsContext";
import InfomationArea from "./Detail/InfomationArea";
import useStyles from "./productDetailStyles";
import NameAndPrice from "./ProductOrderDetail/NameAndPrice";
import ProductOrderDetail from "./ProductOrderDetail/ProductOrderDetail";
import ProductOrderTab from "./Tab/ProductOrderTab";

const ProductDetail = () => {
  const { productId } = useParams();
  const classes = useStyles();
  const [otherProducts, setOtherProducts] = useState([]);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { price, name, collections } = product;
  const fetchProduct = async () => {
    const product = await axios.get(`get-one-product?id=${productId}`);
    const alsoBought = await axios.get(
      "type?items=10&name=converse&page=1&sort_price=0"
    );
    return {
      product,
      alsoBought,
    };
  };

  useEffect(() => {
    const res = fetchProduct();
    res.then((res) => {
      setOtherProducts(res.alsoBought.data.data);
      dispatch(selectedProducts(res.product.data.product));
    });
    window.scrollTo(0, 0);
  }, [productId]);
  if (otherProducts.length == 0) {
    return <div>Loading</div>;
  }
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 959px)",
        large: "(min-width: 960px)",
      }}
    >
      {(matches) => (
        <PhongDiv className={classes.content}>
          {!_.isEmpty(product) ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                {!matches.large && (
                  <NameAndPrice
                    collections={collections}
                    name={name}
                    price={price}
                  />
                )}
                <PhongDiv
                  height={`${
                    matches.large || matches.medium ? "580px" : "250px"
                  }`}
                  position="relative"
                >
                  <SlideImage images={product.poster} />
                </PhongDiv>
                {!matches.large ? (
                  <ProductOrderDetail product={product} />
                ) : null}
                <ProductOrderTab />
                <OtherProductsContext.Provider value={{ otherProducts }}>
                  <InfomationArea />
                </OtherProductsContext.Provider>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                {matches.large ? (
                  <ProductOrderDetail product={product} />
                ) : null}
              </Grid>
            </Grid>
          ) : null}
        </PhongDiv>
      )}
    </Media>
  );
};

export default ProductDetail;
