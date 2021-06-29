import React from "react";
import useStyles from "./SpecificationsStyles";

const Specifications = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <h1>THÔNG SỐ</h1>
      <div className={classes.specifications}>
        <ul>
          <li>Có dây buộc và quai tùy chỉnh</li>
          <li>Thân giày bằng da</li>
          <li>Đế ngoài bằng cao su</li>
        </ul>
        <ul>
          <li>Màu sản phẩm: Cloud White / Core Black / Cloud White</li>
          <li>Mã sản phẩm: FY7939</li>
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
