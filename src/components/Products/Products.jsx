import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import useStyles from "./productsStyles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../actions";

const Products = () => {
  const classes = useStyles();

  //lấy object từ state
  const products = useSelector((state) => state.products);
  //bắn api lấy data về
  const fetchData = async () => {
    const res = await fetch(
      "https://api-kaito-shop.herokuapp.com/api/products/type?name=Puma&page=1&sort_price=0"
    );

    return res.json();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const data = fetchData();
    data.then((res) => {
      const newData = res.data.map((item) => ({ ...item, wishList: false }));
      dispatch(updateProducts(newData));
    });
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product, index) => {
          return (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
