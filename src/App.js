import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import useStyles from "./appStyles";
import Cart from "./components/Cart/Cart";
import Delivery from "./components/Dilivery/Delivery";
import PaymentPage from "./components/Dilivery/Payment/PaymentPage";
import StepsNav from "./components/Dilivery/StepsNav";
import Navbar from "./components/NavBar/Navbar";
import ProductDetail from "./components/Product/ProductDetail.jsx";
import Products from "./components/Products/Products";
import ViewPDF from "./components/ViewPDF";
import { AuthProvider } from "./Context/AuthContext";
import PaymentProvider from "./Context/PaymentContext";
import CheckoutFooter from "./General/CheckoutFooter";
import LoginPage from "./Login/LoginPage";
import Register from "./Login/Register/Register";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <ScrollToTop />
        <AuthProvider>
          <Navbar />
          <div className={classes.toolbar} />
          <div className={classes.content}>
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
              <Route exact path="/pdf" component={ViewPDF} />
              <PaymentProvider>
                <StepsNav />
                <Route
                  exact
                  path="/delivery"
                  render={() => {
                    return localStorage.getItem("carts") ? (
                      <Delivery />
                    ) : (
                      <Redirect to="Cart" />
                    );
                  }}
                />
                <Route
                  exact
                  path="/payment"
                  render={() => {
                    return sessionStorage.getItem("canPayment") ? (
                      <PaymentPage />
                    ) : localStorage.getItem("carts") ? (
                      <Delivery />
                    ) : (
                      <Redirect to="Cart" />
                    );
                  }}
                />
              </PaymentProvider>
            </Switch>
          </div>
          <CheckoutFooter />
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
