import React, { useState } from "react";
import PhongDiv from "./PhongDiv";
import {
  Divider,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import PaymentByCredit from "../components/Dilivery/Payment/PaymentByCredit";
import ButtonWithArrow from "./ButtonWithArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(() => {
  return {
    treeview: {
      opacity: 1,
      maxHeight: "1000px",
      overflow: "visible",
      transition: "all .3s",
      margin: "16px 0 16px 32px",
      "&.hide": {
        opacity: 0,
        maxHeight: 0,
        overflow: "hidden",
        margin: "0",
      },
    },
    radioGroup: {
      "& .MuiRadio-colorSecondary.Mui-checked": {
        color: "black",
      },
      fontFamily: `"Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important`,
    },
  };
});

const PhongTreeview = () => {
  const classes = useStyles();
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState("cash");

  const handleChange = (event) => {
    if (event.target.value === "visa") {
      setHide(true);
    } else {
      setHide(false);
    }
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <RadioGroup
        className={classes.radioGroup}
        value={value}
        onChange={handleChange}
      >
        <PhongDiv
          display="flex"
          alignitems="center"
          justifycontent="space-between"
        >
          <FormControlLabel
            value="visa"
            control={<Radio />}
            label={<strong>Thẻ tín dụng/ Thẻ ghi nợ</strong>}
          />
          {value !== "visa" && (
            <PhongDiv height="32px" display="flex" alignitems="center">
              <img
                style={{ height: "25px" }}
                src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-visa.svg"
                alt=""
              />
              <img
                style={{ height: "25px" }}
                src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-master-card.svg"
                alt=""
              />
            </PhongDiv>
          )}
        </PhongDiv>
        <PhongDiv className={classes.treeview + (!hide ? " hide" : "")}>
          <PaymentByCredit />
        </PhongDiv>
        <Divider
          style={{ backgroundColor: "black", margin: "10px 0 10px 0" }}
        />
        <PhongDiv
          display="flex"
          alignitems="center"
          justifycontent="space-between"
        >
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label={<strong>Thanh toán khi nhận hàng</strong>}
          />
          <PhongDiv>
            <img
              src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-cash-on-delivery.svg"
              alt=""
            />
          </PhongDiv>
        </PhongDiv>
        <PhongDiv className={classes.treeview + (hide ? " hide" : "")}>
          <PhongDiv margin="0 0 20px 0">
            Không cần thanh toán trực tuyến - trả tiền mặt bằng cách sử dụng
            thay đổi chính xác sau khi các mặt hàng của bạn được giao!
          </PhongDiv>
          <PhongDiv>
            Thông tin chi tiết về tài khoản ngân hàng của bạn sẽ chỉ được yêu
            cầu nếu bạn muốn trả lại bất kỳ sản phẩm nào để được hoàn tiền.
          </PhongDiv>
        </PhongDiv>
      </RadioGroup>

      <ButtonWithArrow margin="30px 0 0 0" text="Đặt hàng" />
    </React.Fragment>
  );
};

export default PhongTreeview;
