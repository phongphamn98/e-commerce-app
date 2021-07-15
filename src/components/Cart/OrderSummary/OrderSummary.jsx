import React from "react";
import useStyles from "./orderSummaryStyles";
import { Typography } from "@material-ui/core";
import formatMoney from "../../../General/formatMoney";
const OrderSummary = ({ totalItem, totalCost }) => {
  const classes = useStyles();

  const renderListDetail = (title, detail, isBold = false) => {
    return (
      <div className={classes.summary}>
        <div className={classes.title + `${isBold ? " bold" : ""}`}>
          {title}
        </div>
        <div className={classes.detail + `${isBold ? " bold" : ""}`}>
          {detail}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.content}>
      <Typography className={classes.orderTitle} variant="h5">
        tóm tắt đơn hàng
      </Typography>
      {renderListDetail(`${totalItem} sản phẩm`, `${formatMoney(totalCost)}₫`)}
      {renderListDetail("Phí giao hàng", "Miễn phí")}
      {/* {renderListDetail("33% off", "- 14.586.000₫")} */}
      {renderListDetail("tổng", `${formatMoney(totalCost)}₫`, true)}
    </div>
  );
};

export default OrderSummary;
