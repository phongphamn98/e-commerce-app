import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";
import React from "react";
import Media from "react-media";
import { AuthProvider } from "../Context/AuthContext";
import ButtonArrow from "../General/ButtonArrow";
import PhongDiv from "../General/PhongDiv";
import LoginForm from "./LoginForm";

const info = [
  "Tổng quan đơn giản về thông tin cá nhân của bạn",
  "Thanh toán nhanh hơn",
  "Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và dịch vụ của adidas",
  "Ưu đãi và khuyến mãi độc quyền",
  "Các sản phẩm mới nhất",
  "Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới",
  "Các sự kiện sắp tới",
];

const LoginPage = () => {
  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px) ",
      }}
    >
      {(matches) => (
        <PhongDiv margin="0 auto" padding="0 20px" maxwidth="1220px">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <LoginForm />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <PhongDiv>
                <PhongDiv
                  fontsize={matches.large ? "42px" : "36px"}
                  texttransform="uppercase"
                  fontweight="bold"
                >
                  tạo một tài khoản
                </PhongDiv>
                <p>
                  Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn
                  và điền vào mẫu trên trang tiếp theo và tận hưởng những lợi
                  ích của việc sở hữu một tài khoản.
                </p>
                {info.map((item) => (
                  <PhongDiv
                    key={item}
                    display="flex"
                    flexgap="1rem"
                    lineheight="30px"
                    alignitems="center"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{item}</span>
                  </PhongDiv>
                ))}
                <ButtonArrow
                  goTo="/register"
                  width={matches.large ? "30%" : "unset"}
                  text="Đăng kí"
                  isBlackBackground={true}
                  margin="20px 0 0 0"
                />
              </PhongDiv>
            </Grid>
          </Grid>
        </PhongDiv>
      )}
    </Media>
  );
};

export default LoginPage;
