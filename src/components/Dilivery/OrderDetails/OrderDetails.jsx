import { Divider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../../Context/AuthContext";
import ContainerWithBorder from "../../../General/ContainerWithBorder";
import PhongDiv from "../../../General/PhongDiv";
import LoginForm from "../../../Login/LoginForm";
import AcceptedPayment from "../../Cart/AcceptedPayment/AcceptedPayment";
import OrderSummary from "../../Cart/OrderSummary/OrderSummary";
import ProductInCart from "./ProductInCart";

const OrderDetails = ({ currentUser }) => {
  const carts = useSelector((state) => state.allProducts.carts);
  const { listProduct, totalItem, totalCost } = carts;
  return (
    <PhongDiv>
      {!currentUser && (
        <PhongDiv
          padding="20px"
          margin="0 0 20px 0"
          border="1px solid #0000001f"
        >
          <LoginForm redirect={false} />
        </PhongDiv>
      )}

      <ContainerWithBorder>
        <OrderSummary totalItem={totalItem} totalCost={totalCost} />
      </ContainerWithBorder>
      <ContainerWithBorder>
        <ProductInCart products={listProduct} />
      </ContainerWithBorder>
    </PhongDiv>
  );
};

export default OrderDetails;
