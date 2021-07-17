import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
import PaymentProvider, { usePayment } from "./Context/PaymentContext";
import PaymentPage from "./components/Dilivery/Payment/PaymentPage";
import PhongDiv from "./General/PhongDiv";
import StepsNav from "./components/Dilivery/StepsNav";
import { Wizard, Steps, Step } from "react-albus";
import StepWizard from "./components/Dilivery/StepWizard";

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
                    return localStorage.getItem("canPayment") ? (
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
