import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useStyles from "./appStyles";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/NavBar/Navbar";
import ProductDetail from "./components/Product/ProductDetail.jsx";
import Products from "./components/Products/Products";
import CheckoutFooter from "./General/CheckoutFooter";

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Navbar />
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/product/:productId">
            <ProductDetail />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch>
        <CheckoutFooter />
      </div>
    </Router>
  );
};

export default App;
