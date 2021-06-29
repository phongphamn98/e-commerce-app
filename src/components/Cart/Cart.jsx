import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import PhongDiv from "../../General/PhongDiv";
import CartItem from "./CartItem/CartItem";
import useStyles from "./cartStyles";
import OrderSummary from "./OrderSummary/OrderSummary";

const Cart = () => {
  //   const dispatch = useDispatch();
  const [totalCost, setTotalCost] = useState(0);
  const [qty, setQty] = useState(0);
  const carts = useSelector((state) => state.allProducts.carts);

  useEffect(() => {
    let count = 0;
    let cost = 0;
    for (let item of carts) {
      count += item.qty;
      cost += item.qty * item.price;
    }
    setTotalCost(cost);
    setQty(count);
  }, [carts, qty]);

  const classes = useStyles();
//   if(!qty){
//      return (
//       <Typography
//       className={classes.noItem}
//       variant="h4" 
//     >
//       túi của bạn trống
//     </Typography>
//      )
//   }
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
            {!qty ?  
            <PhongDiv display="flex" flexdirection="column" flexGap="1em">
            <Typography
                className={classes.myCart}
                variant={matches.large ? "h4" : "h5"}
              >
                Túi của bạn trống
              </Typography>
              <PhongDiv>Once you add something to your bag - it will appear here. Ready to get started?</PhongDiv>
              <PhongDiv width={"50%"} className={classes.btnOrder}>
                    <div className={classes.btnText}>Get started</div>
                    <IconButton className={classes.btnArrow}>
                      <FontAwesomeIcon
                        color="white"
                        fontSize="30px"
                        icon={faLongArrowAltRight}
                      />
                    </IconButton>
                  </PhongDiv>
                  </PhongDiv>: <React.Fragment>
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
                  TỔNG CỘNG ({qty} sản phẩm){" "}
                  <span className={classes.money}>
                    {new Intl.NumberFormat().format(totalCost)}₫
                  </span>
                </PhongDiv>
                {!matches.large && (
                  <PhongDiv width={"45%"} className={classes.btnOrder}>
                    <div className={classes.btnText}>Thanh toán</div>
                    <IconButton className={classes.btnArrow}>
                      <FontAwesomeIcon
                        color="white"
                        fontSize="30px"
                        icon={faLongArrowAltRight}
                      />
                    </IconButton>
                  </PhongDiv>
                )}
              </PhongDiv>
              {carts.map((prod) => {
                return <CartItem key={prod._id + prod.size} prod={prod} />;
              })}
              {matches.large && (<PhongDiv margin="30px 0" width="50%"className={classes.btnOrder}>
                <div className={classes.btnText}>Thanh toán</div>
                <IconButton className={classes.btnArrow}>
                  <FontAwesomeIcon
                    color="white"
                    fontSize="30px"
                    icon={faLongArrowAltRight}
                  />
                </IconButton>
              </PhongDiv>)}
            </React.Fragment>}
              
              
            </PhongDiv>
            <PhongDiv
              className={classes.orderSummary}
              maxwidth={matches.large ? "30%" : "100%"}
              display={"flex"}
              margin={matches.large ? "28px 0 0 0" : 0}
                flexdirection={!matches.large ? "column-reverse": "column"}
            >
            {!qty ? <PhongDiv>
               <PhongDiv fontsize="13px" lineheight="23px" fontweight="bold">
               PHƯƠNG THỨC THANH TOÁN ĐƯỢC CHẤP NHẬN
               </PhongDiv>
               <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/paymentmethod_VN_new_tcm337-690224.png" alt="" />
            </PhongDiv>: <React.Fragment>
               <div className={classes.btnOrder}>
                <div className={classes.btnText}>Thanh toán</div>
                <IconButton className={classes.btnArrow}>
                  <FontAwesomeIcon
                    color="white"
                    fontSize="30px"
                    icon={faLongArrowAltRight}
                  />
                </IconButton>
              </div>
              <OrderSummary qty={qty} totalCost={totalCost} carts={carts} />
            </React.Fragment>}
             
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
