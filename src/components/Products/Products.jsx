import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import Product from "../Product/Product";
import useStyles from "./productsStyles";

const Products = () => {
  const classes = useStyles();

  //lấy object từ state
  const allProducts = useSelector((state) => state.allProducts);
  const { products } = allProducts;
  //bắn api lấy data về
  const fetchData = async () => {
    const res = await fetch(
      "https://api-kaito-shop.herokuapp.com/api/products/type?items=20&name=converse&page=1&sort_price=0"
    );

    return res.json();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const data = fetchData();
    data.then((res) => {
      const newData = res.data.map((item) => ({ ...item, wishList: false }));
      dispatch(setProducts(newData));
    });
  }, []);
  return (
    <main className={classes.content}>
      <Grid container justify="center">
        {products.map((product, index) => {
          return (
            <Grid
              className={classes.grid}
              item
              key={product._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Product isChangeImage={true} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
