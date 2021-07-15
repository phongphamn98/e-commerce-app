import { Divider, Grid } from "@material-ui/core";
import React from "react";
import Media from "react-media";
import { usePayment } from "../../../Context/PaymentContext";
import PhongDiv from "../../../General/PhongDiv";
import PhongTreeview from "../../../General/PhongTreeview";
import OrderSummary from "../../Cart/OrderSummary/OrderSummary";
import { useSelector } from "react-redux";
import ProductInCart from "../OrderDetails/ProductInCart";
import AcceptedPayment from "../../Cart/AcceptedPayment/AcceptedPayment";
import DeliveryInfo from "./DeliveryInfo";

const PaymentPage = () => {
  const { paymentInfo } = usePayment();
  const carts = useSelector((state) => state.allProducts.carts);
  const { totalItem, totalCost, listProduct } = carts;
  console.log("paymentInfo", paymentInfo);
  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px) and (max-width: 1280px)",
        xLarge: "(min-width: 1280px",
      }}
    >
      {(matches) => (
        <React.Fragment>
          <PhongDiv
            // height="calc(100vh - 178px)"
            padding="0 15px 30px"
            margin="0 auto"
            maxwidth={matches.xLarge ? "1280px" : "1175px"}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <PhongDiv>
                  <PhongDiv
                    fontsize={matches.xLarge ? "32px" : "26px"}
                    texttransform="uppercase"
                    fontweight="bold"
                    margin="0 0 20px 0"
                  >
                    phương thức thanh toán
                  </PhongDiv>
                  <PhongDiv margin="0 0 20px 0">
                    Tất cả giao dịch đều an toàn và bảo mật
                  </PhongDiv>
                  <Divider
                    style={{ backgroundColor: "black", marginBottom: "10px" }}
                  />
                  <PhongTreeview />
                </PhongDiv>
                {matches.medium && (
                  <Divider
                    style={{ backgroundColor: "black", marginTop: "30px" }}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <OrderSummary totalCost={totalCost} totalItem={totalItem} />
                <PhongDiv
                  padding="10px"
                  border="1px solid #eceff1"
                  margin="20px 0 0 0"
                >
                  <ProductInCart products={listProduct} />
                </PhongDiv>
                <DeliveryInfo info={paymentInfo} />
                <AcceptedPayment />
              </Grid>
            </Grid>
          </PhongDiv>
        </React.Fragment>
      )}
    </Media>
  );
};

export default PaymentPage;
