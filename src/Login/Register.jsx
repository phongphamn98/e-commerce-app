import React from "react";
import Media from "react-media";
import PhongDiv from "../General/PhongDiv";

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
        <PhongDiv>
          <PhongDiv
            fontsize={matches.large ? "42px" : "36px"}
            texttransform="uppercase"
            fontweight="bold"
          >
            tạo một tài khoản
          </PhongDiv>
          <p>
            Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn và
            điền vào mẫu trên trang tiếp theo và tận hưởng những lợi ích của
            việc sở hữu một tài khoản.
          </p>
        </PhongDiv>
      )}
    </Media>
  );
};

export default Register;
