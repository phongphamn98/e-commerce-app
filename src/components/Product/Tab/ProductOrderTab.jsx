import React, { useState } from "react";
import OrderTab from "./OrderTab";
import useStyles from "./tab";
import ScrollTo from "react-scroll-into-view";
import PhongDiv from "../../../General/PhongDiv";

const ProductOrderTab = () => {
  const [id, setId] = useState("");
  const classes = useStyles();
  return (
    <PhongDiv className={classes.menu}>
      <ScrollTo
        onClick={() => {
          setId("slideImage");
        }}
        selector={`#slideImage`}
      >
        <OrderTab id={id} text="Bộ sưu tập" />
      </ScrollTo>
      <ScrollTo
        onClick={() => {
          setId("productDescription");
        }}
        selector={`#productDescription`}
      >
        <OrderTab id={id} text="Mô tả" />
      </ScrollTo>
      {/* </ScrollTo> */}
      <ScrollTo
        onClick={() => {
          setId("specifications");
        }}
        selector={`#specifications`}
      >
        <OrderTab id={id} text="Thông tin chi tiết" />
      </ScrollTo>
      <ScrollTo
        onClick={() => {
          setId("cart4");
        }}
        selector={`#cart4`}
      >
        <OrderTab id={id} text="Đánh giá" />
      </ScrollTo>
    </PhongDiv>
  );
};

export default ProductOrderTab;
