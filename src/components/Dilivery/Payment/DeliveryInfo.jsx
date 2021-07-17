import React from "react";
import PhongDiv from "../../../General/PhongDiv";

const DeliveryInfo = ({ info }) => {
  const renderInfo = (title, details) => {
    return (
      <PhongDiv display="flex">
        <div
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            minWidth: "60px",
            margin: "0 5px 0 0",
          }}
        >
          {title}:
        </div>
        {details}
      </PhongDiv>
    );
  };

  return (
    <PhongDiv>
      <PhongDiv
        margin="0 0 15px 0"
        fontsize="18px"
        texttransform="uppercase"
        fontweight="bold"
      >
        Thông tin giao hàng
      </PhongDiv>
      <PhongDiv display="flex" flexdirection="column" flexgap="0.5rem">
        {renderInfo("họ tên", `${info.firstName} ${info.lastName}`)}
        {renderInfo("sđt", info.phoneNumber)}
        {renderInfo("email", info.email)}
        {renderInfo(
          "địa chỉ",
          `${info.street}, phường ${info.ward}, quận ${info.distric}, ${info.province}`
        )}
      </PhongDiv>
    </PhongDiv>
  );
};

export default DeliveryInfo;
