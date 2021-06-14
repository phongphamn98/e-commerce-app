import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product/Product";
import useStyles from "./productsStyles";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: "45$",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af904261-e50a-4b80-b9b4-4ae945ceee69/air-zoom-tempo-next-flyease-running-shoe-40pJSQ.png",
  },
  {
    id: 2,
    name: "shoes",
    description: "Running shoes",
    price: "45$",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c43f926d-bb0f-440f-b863-3118eb4c0142/air-zoom-alphafly-next-racing-shoe-13jzhr.png",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
