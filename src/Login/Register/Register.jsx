import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Media from "react-media";
import { AuthProvider } from "../../Context/AuthContext";
import ButtonArrow from "../../General/ButtonArrow";
import PhongDiv from "../../General/PhongDiv";
import RegisterForm from "./RegisterForm";

const info = [
  "Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và dịch vụ của adidas",
  "Thanh toán nhanh hơn",
  "Xem lịch sử đặt hàng riêng của bạn",
  "Thêm hoặc thay đổi tùy chọn email",
];

const Register = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 640px)",
        medium: "(min-width: 641px) and (max-width: 1276px)",
        large: "(min-width: 1277px) ",
      }}
    >
      {(matches) => (
        <PhongDiv
          margin="30px 0 0 0 "
          display="flex"
          justifycontent="space-evenly"
        >
          <RegisterForm />
          <PhongDiv flexbasis="40%">
            <PhongDiv
              fontsize={matches.large ? "42px" : "36px"}
              texttransform="uppercase"
              fontweight="bold"
            >
              tạo một tài khoản
            </PhongDiv>
            <p>Đăng Nhập Chung sẽ giúp bạn truy cập:</p>
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
              goTo="/login"
              width={"30%"}
              text="Đăng nhập"
              isBlackBackground={true}
            />
          </PhongDiv>
        </PhongDiv>
      )}
    </Media>
  );
};

export default Register;
