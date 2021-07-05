import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import ButtonWithArrow from "../../General/ButtonWithArrow";
import formatMoney from "../../General/formatMoney";
import PhongDiv from "../../General/PhongDiv";
import CartItem from "./CartItem/CartItem";
import useStyles from "./cartStyles";
import OrderSummary from "./OrderSummary/OrderSummary";

const Cart = () => {
  const carts = useSelector((state) => state.allProducts.carts);
  const { listProduct, totalItem, totalCost } = carts;
  const classes = useStyles();
  return (
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
                <PhongDiv display="flex" flexdirection="column" flexgap="1em">
                  <Typography
                    className={classes.myCart}
                    variant={matches.large ? "h4" : "h5"}
                  >
                    Túi của bạn trống
                  </Typography>
                  <PhongDiv>
                    Once you add something to your bag - it will appear here.
                    Ready to get started?
                  </PhongDiv>
                  <PhongDiv width={"50%"}>
                    <ButtonWithArrow
                      goTo="/"
                      text="Get started"
                      isBlackBackground={true}
                    />
                  </PhongDiv>
                </PhongDiv>
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
                        <ButtonWithArrow
                          text="Thanh toán"
                          isBlackBackground={true}
                        />
                      </PhongDiv>
                    )}
                  </PhongDiv>
                  {listProduct.map((prod) => {
                    return <CartItem key={prod._id + prod.size} prod={prod} />;
                  })}
                  {matches.large && (
                    <PhongDiv margin="30px 0" width="50%">
                      <ButtonWithArrow
                        text="Thanh toán"
                        isBlackBackground={true}
                      />
                    </PhongDiv>
                  )}
                </React.Fragment>
              )}
            </PhongDiv>
            <PhongDiv
              className={classes.orderSummary}
              maxwidth={matches.large ? "30%" : "100%"}
              display={"flex"}
              margin={matches.large ? "28px 0 0 0" : 0}
              flexdirection={!matches.large ? "column-reverse" : "column"}
            >
              {!totalItem ? (
                <PhongDiv>
                  <PhongDiv fontSize="13px" lineheight="23px" fontWeight="bold">
                    PHƯƠNG THỨC THANH TOÁN ĐƯỢC CHẤP NHẬN
                  </PhongDiv>
                  <img
                    src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/paymentmethod_VN_new_tcm337-690224.png"
                    alt=""
                  />
                </PhongDiv>
              ) : (
                <React.Fragment>
                  <PhongDiv>
                    <ButtonWithArrow
                      text="Thanh toán"
                      isBlackBackground={true}
                    />
                  </PhongDiv>

                  <OrderSummary
                    totalItem={totalItem}
                    totalCost={totalCost}
                    carts={carts}
                  />
                </React.Fragment>
              )}
            </PhongDiv>
            {/* </>
            )} */}
          </React.Fragment>
        )}
      </Media>
    </PhongDiv>
  );
};

export default Cart;
