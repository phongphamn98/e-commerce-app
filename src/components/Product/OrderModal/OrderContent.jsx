import React from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import ButtonWithArrow from "../../../General/ButtonWithArrow";
import formatMoney from "../../../General/formatMoney";
import PhongDiv from "../../../General/PhongDiv";
import useStyles from "./contentStyles";
const OrderContent = ({ product, size }) => {
  const classes = useStyles();
  const { name, poster, price } = product;
  const carts = useSelector((state) => state.allProducts.carts);
  const { listProduct, totalCost } = carts;
  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px)",
      }}
    >
      {(matches) => (
        <PhongDiv
          width={matches.medium ? "100%" : "55%"}
          className={classes.content}
        >
          <h1>ĐÃ THÊM VÀO GIỎ HÀNG CỦA BẠN THÀNH CÔNG!</h1>
          {!matches.medium ? (
            <PhongDiv display="flex">
              <PhongDiv display="flex" flexgap="1rem" flexbasis="100%">
                <img className={classes.img} src={poster[0].url} alt="" />
                <PhongDiv>
                  <PhongDiv
                    fontSize="20px"
                    lineheight="18px"
                    margin="0 0 20px 0"
                    texttransform="uppercase"
                  >
                    {name}
                  </PhongDiv>
                  <PhongDiv fontWeight="600">{formatMoney(price)}đ</PhongDiv>
                  <PhongDiv lineheight="23px">
                    <div>Màu: White</div>
                    <div>Cỡ: {size}</div>
                    <div>Số lượng: 1</div>
                  </PhongDiv>
                </PhongDiv>
              </PhongDiv>
              <PhongDiv
                padding="0 0 0 10px"
                className={classes.urCartConent}
                flexbasis="100%"
              >
                <PhongDiv
                  fontSize="1.2em"
                  fontWeight="bold"
                  margin="0 0 15px 0"
                >
                  GIỎ HÀNG CỦA BẠN
                </PhongDiv>
                <span>{listProduct.length} mặt hàng</span>
                <PhongDiv
                  display="flex"
                  justifycontent="space-between"
                  lineheight="30px"
                >
                  <div>Tổng giá trị sản phẩm:</div>
                  <div>{formatMoney(totalCost)}đ</div>
                </PhongDiv>
                <PhongDiv display="flex" justifycontent="space-between">
                  <div>Tổng phí giao hàng:</div>
                  <div>MIỄN PHÍ</div>
                </PhongDiv>
                <div className={classes.divider} />
                <PhongDiv
                  display="flex"
                  justifycontent="space-between"
                  fontWeight="bold"
                  margin="0 0 5px 0"
                >
                  <div>Tổng cộng</div>
                  <div>{formatMoney(totalCost)}đ</div>
                </PhongDiv>
                <span>(Đã bao gồm thuế)</span>
                <PhongDiv
                  margin="10px 0"
                  display="flex"
                  flexdirection="column"
                  flexgap="1em"
                >
                  <ButtonWithArrow
                    goTo="/cart"
                    text="Xem lại giỏ hàng"
                    isBlackBackground={true}
                  ></ButtonWithArrow>
                  <ButtonWithArrow
                    text="Thanh toán"
                    isBlackBackground={false}
                  />
                </PhongDiv>
              </PhongDiv>
            </PhongDiv>
          ) : (
            <PhongDiv>
              <PhongDiv
                margin="10px 0"
                display="flex"
                flexdirection="column"
                flexgap="1em"
              >
                <ButtonWithArrow
                  goTo="/cart"
                  text="Xem lại giỏ hàng"
                  isBlackBackground={true}
                ></ButtonWithArrow>
                <ButtonWithArrow text="Thanh toán" isBlackBackground={false} />
              </PhongDiv>
            </PhongDiv>
          )}
        </PhongDiv>
      )}
    </Media>
  );
};

export default OrderContent;
