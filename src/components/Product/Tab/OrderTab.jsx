import React from "react";
import useStyles from "./tab";

const OrderTab = ({ text }) => {
  const classes = useStyles();
  return (
    <div id="description" className={classes.text}>
      {text}
    </div>
  );
};

export default OrderTab;
