import React from "react";
import OrderTab from "./OrderTab";
import useStyles from "./tab";
import ScrollTo from "react-scroll-into-view";

const ProductOrderTab = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <ScrollTo selector={`#slideImage`}>
        <OrderTab text="Bộ sưu tập" />
      </ScrollTo>
      {/* <ScrollTo selector={`#card${card}`}> */}
      <ScrollTo selector={`#productDescription`}>
        <OrderTab text="Mô tả" />
      </ScrollTo>
      {/* </ScrollTo> */}
      <ScrollTo selector={`#specifications`}>
        <OrderTab text="Thông tin chi tiết" />
      </ScrollTo>
      <ScrollTo selector={`#cart4`}>
        <OrderTab text="Đánh giá" />
      </ScrollTo>
    </div>
  );
};

export default ProductOrderTab;
