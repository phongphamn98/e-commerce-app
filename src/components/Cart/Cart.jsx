import { Typography } from "@material-ui/core";
import React from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import ButtonArrow from "../../General/ButtonArrow";
import formatMoney from "../../General/formatMoney";
import PhongDiv from "../../General/PhongDiv";
import AcceptedPayment from "./AcceptedPayment/AcceptedPayment";
import CartItem from "./CartItem/CartItem";
import CartNoItem from "./CartNoItem/CartNoItem";
import useStyles from "./cartStyles";
import OrderSummary from "./OrderSummary/OrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import ContainerWithBorder from "../../General/ContainerWithBorder";

const Cart = () => {
  const carts = useSelector((state) => state.allProducts.carts);
  const { listProduct, totalItem, totalCost } = carts;
  const classes = useStyles();
  return (
    <React.Fragment>
      <PhongDiv
        className={classes.content}
        display="flex"
        flexwrap="wrap"
        padding="15px 0"
        justifycontent={"center"}
      >
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 967px)",
            large: "(min-width: 968px)",
          }}
        >
          {(matches) => (
            <React.Fragment>
              <PhongDiv
                className={classes.leftContent}
                maxwidth={matches.large ? "50%" : "100%"}
              >
                {!totalItem ? (
                  <CartNoItem matches={matches} />
                ) : (
                  <React.Fragment>
                    <Typography
                      className={classes.myCart}
                      variant={matches.large ? "h4" : "h5"}
                    >
                      Giỏ hàng của bạn
                    </Typography>
                    <PhongDiv
                      display="flex"
                      justifycontent="space-between"
                      alignitems="center"
                    >
                      <PhongDiv className={classes.total} minwidth={"20ch"}>
                        TỔNG CỘNG ({totalItem} sản phẩm){" "}
                        <span className={classes.money}>
                          {formatMoney(totalCost)}₫
                        </span>
                      </PhongDiv>
                      {!matches.large && (
                        <PhongDiv width={"45%"}>
                          <ButtonArrow
                            text="Thanh toán"
                            isBlackBackground={true}
                            goTo="/delivery"
                          />
                        </PhongDiv>
                      )}
                    </PhongDiv>
                    {listProduct.map((prod) => {
                      return (
                        <CartItem key={prod._id + prod.size} prod={prod} />
                      );
                    })}
                    {matches.large && (
                      <>
                        <PhongDiv margin="30px 0" width="50%">
                          <ButtonArrow
                            text="Thanh toán"
                            isBlackBackground={true}
                            goTo="/delivery"
                          />
                        </PhongDiv>
                        <PhongDiv
                          display="flex"
                          flexdirection="column"
                          flexgap="1rem"
                        >
                          <PhongDiv
                            fontsize="14px"
                            textDecoration="underline"
                            display="inline-flex"
                            flexgap="10px"
                            cursor="pointer"
                          >
                            <FontAwesomeIcon
                              fontSize="30px"
                              icon={faShippingFast}
                            />
                            <span>Miễn phí giao hàng trên 1.000.000 VNĐ</span>
                          </PhongDiv>
                          <PhongDiv
                            display="inline-flex"
                            flexgap="10px"
                            fontsize="14px"
                            textDecoration="underline"
                            alignitems="center"
                            cursor="pointer"
                          >
                            <FontAwesomeIcon
                              fontSize="30px"
                              icon={faMoneyCheckAlt}
                            />
                            <span>Trả hàng dễ dàng</span>
                          </PhongDiv>
                        </PhongDiv>
                      </>
                    )}
                  </React.Fragment>
                )}
              </PhongDiv>
              <PhongDiv
                className={classes.orderSummary}
                maxwidth={matches.large ? "30%" : "100%"}
                display={"flex"}
                margin={matches.large ? "28px 0 0 0" : 0}
                flexdirection={"column"}
              >
                {!totalItem ? (
                  <AcceptedPayment />
                ) : (
                  <React.Fragment>
                    <PhongDiv
                      display="flex"
                      flexdirection={
                        matches.large ? "column" : "column-reverse"
                      }
                      flexgap="1rem"
                    >
                      {!matches.large && (
                        <PhongDiv
                          display="flex"
                          flexdirection="column"
                          flexgap="1rem"
                        >
                          <PhongDiv
                            fontsize="14px"
                            textDecoration="underline"
                            display="inline-flex"
                            flexgap="10px"
                            cursor="pointer"
                          >
                            <FontAwesomeIcon
                              fontSize="30px"
                              icon={faShippingFast}
                            />
                            <span>Miễn phí giao hàng trên 1.000.000 VNĐ</span>
                          </PhongDiv>
                          <PhongDiv
                            display="inline-flex"
                            flexgap="10px"
                            fontsize="14px"
                            textDecoration="underline"
                            alignitems="center"
                            cursor="pointer"
                          >
                            <FontAwesomeIcon
                              fontSize="30px"
                              icon={faMoneyCheckAlt}
                            />
                            <span>Trả hàng dễ dàng</span>
                          </PhongDiv>
                        </PhongDiv>
                      )}
                      <PhongDiv>
                        <ButtonArrow
                          text="Thanh toán"
                          isBlackBackground={true}
                          goTo="/delivery"
                        />
                      </PhongDiv>
                      <ContainerWithBorder>
                        <OrderSummary
                          totalItem={totalItem}
                          totalCost={totalCost}
                          carts={carts}
                        />
                      </ContainerWithBorder>
                    </PhongDiv>
                    <AcceptedPayment />
                  </React.Fragment>
                )}
              </PhongDiv>
            </React.Fragment>
          )}
        </Media>
      </PhongDiv>
    </React.Fragment>
  );
};

export default Cart;
