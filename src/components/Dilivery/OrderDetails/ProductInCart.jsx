import React from "react";
import PhongDiv from "../../../General/PhongDiv";
import OrderSingleProduct from "./OrderSingleProduct";

const ProductInCart = ({ products }) => {
  return (
    <PhongDiv>
      <PhongDiv fontsize="18px" texttransform="uppercase" fontweight="bold">
        Chi tiết về đơn hàng
      </PhongDiv>
      {products.map((product) => (
        <OrderSingleProduct key={product._id} product={product} />
      ))}
    </PhongDiv>
  );
};

export default ProductInCart;
