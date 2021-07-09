import React from "react";
import useStyles from "./tab";

const OrderTab = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.text}>{text}</div>;
};

export default OrderTab;
