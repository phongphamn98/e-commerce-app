import React from "react";
import PhongDiv from "./PhongDiv";
import useStyles from "./checkOutStyles";

const CheckoutFooter = () => {
  const classes = useStyles();
  return (
    <PhongDiv
      backgroundcolor="#363738"
      height="84px"
      fontsize="12px"
      display="flex"
      flexdirection="column"
      alignitems="center"
      justifycontent="space-evenly"
      margin="70px 0 0 0"
      // flexgap="1rem"
    >
      <PhongDiv display="flex">
        <PhongDiv padding="0 10px" className={classes.checkout}>
          Chính sách bảo mật
        </PhongDiv>
        <PhongDiv padding="0 10px" className={classes.checkout}>
          Các điều khoản và điều kiện
        </PhongDiv>
        <PhongDiv padding="0 10px" className={classes.checkout}>
          Thông tin công ty
        </PhongDiv>
      </PhongDiv>
      <PhongDiv color="#9a9b9b" fontsize="12px" cursor="pointer">
        © 2021 Vietnam Company Limited
      </PhongDiv>
    </PhongDiv>
  );
};

export default CheckoutFooter;
