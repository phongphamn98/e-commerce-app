import React from "react";
import useStyles from "./descriptionStyles";
import { Grid } from "@material-ui/core";
const Description = ({ product }) => {
  const classes = useStyles();
  return (
    <div className={classes.description}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.descriptionText}>
            <h1 className={classes.name}>{product.name}</h1>
            <p className={classes.detail}>
              Cùng dành một phút giây để tôn vinh một biểu tượng. Phải chăng là
              huyền thoại bóng rổ thách thức trọng lực từ thập niên 80? Hay
              chính là đôi giày lừng danh điểm trang đôi chân các rapper? Thực
              ra là cả hai. Dòng giày adidas Forum vẫn luôn thống trị sân bóng
              rổ cũng như đường phố, nay trở lại với phiên bản cổ lửng giúp đưa
              các chuyển động của bạn lên một tầm cao mới. Cho đôi chân phong
              cách không thể hòa lẫn cùng chất liệu da phủ sang trọng và thể
              hiện đẳng cấp.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img className={classes.image} src={product.poster[0].url} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Description;
