import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useStyles from "./appStyles";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/NavBar/Navbar";
import ProductDetail from "./components/Product/ProductDetail.jsx";
import Products from "./components/Products/Products";
import CheckoutFooter from "./General/CheckoutFooter";
import Register from "./Login/Register/Register";
import LoginPage from "./Login/LoginPage";
import { AuthProvider } from "./Context/AuthContext";
import Delivery from "./components/Dilivery/Delivery";
import ScrollToTop from "./ScrollToTop";
import PaymentProvider from "./Context/PaymentContext";
import PaymentPage from "./components/Dilivery/Payment/PaymentPage";

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <ScrollToTop />
        <AuthProvider>
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
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={LoginPage} />
            <PaymentProvider>
              <Route exact path="/delivery" component={Delivery} />
              <Route exact path="/payment" component={PaymentPage} />
            </PaymentProvider>
          </Switch>
          <CheckoutFooter />
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
