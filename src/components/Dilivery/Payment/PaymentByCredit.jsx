import { FormHelperText, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import PhongDiv from "../../../General/PhongDiv";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./CardUtils";
import { creditCardType, creditCardTypes } from "./CreditCardType";

const useStyles = makeStyles(() => ({
  credit: {
    "& .MuiInputLabel-asterisk": {
      color: "red",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
    "& .Mui-focused": {
      color: "black",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& input": {
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "&::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
  },
  heplerText: {
    fontSize: "14px",
    paddingLeft: "20px",
    color: "red",
  },
  //   input: {
  //     "&:invalid": {
  //       border: "red solid 2px",
  //     },
  //   },
}));

const PaymentByCredit = () => {
  const classes = useStyles();
  const [cardType, setCardType] = useState();
  const [empty, setEmpty] = useState(true);
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <PhongDiv className={classes.credit}>
      <PhongDiv margin="0 0 20px 0">
        Bạn có thể được chuyển hướng đến quy trình bảo mật 3D của ngân hàng để
        xác thực thông tin của bạn
      </PhongDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7} md={7}>
            <PhongDiv>
              <Controller
                control={control}
                name="cardNumber"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    value={value}
                    onChange={(v) => {
                      let cardNumber = formatCreditCardNumber(v.target.value);
                      const type = creditCardType(v.target.value);
                      setCardType(type);
                      setEmpty(v.target.value === "" ? true : false);
                      onChange(cardNumber);
                    }}
                    type="text"
                    pattern="[\d| ]{16,22}"
                    label="Mã số thẻ"
                    variant="outlined"
                  />
                )}
              />
              {errors.cardNumber?.message && (
                <FormHelperText className={classes.heplerText}>
                  Mã số thẻ không hợp lệ(tối thiểu 16 số)
                </FormHelperText>
              )}
            </PhongDiv>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <PhongDiv height="100%" display="flex" alignitems="center">
              {empty === false ? (
                <>
                  {cardType === creditCardTypes.VISA && (
                    <img
                      style={{ height: "30px" }}
                      src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-visa.svg"
                      alt=""
                    />
                  )}
                  {cardType === creditCardTypes.MASTERCARD && (
                    <img
                      style={{ height: "30px" }}
                      src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-master-card.svg"
                      alt=""
                    />
                  )}
                </>
              ) : (
                <>
                  <img
                    style={{ height: "30px" }}
                    src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-visa.svg"
                    alt=""
                  />
                  <img
                    style={{ height: "30px" }}
                    src="https://www.adidas.com.vn/glass/react/693a147/assets/img/icon-adidas-master-card.svg"
                    alt=""
                  />
                </>
              )}
            </PhongDiv>
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
            <Controller
              control={control}
              name="cardName"
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  onChange={(e) => {
                    let name = e.target.value.replace(
                      /(\[A-Z]|\[a-z]|\\ )|\d+/g,
                      ""
                    );
                    onChange(name);
                  }}
                  label="Tên trên thẻ"
                  pattern="[A-Z]|[a-z]| "
                  required
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={3} md={3}>
                <Controller
                  control={control}
                  name="expiry"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      value={value}
                      onChange={(e) => {
                        let expiryDate = formatExpirationDate(e.target.value);
                        onChange(expiryDate);
                      }}
                      type="text"
                      pattern="[\d\d/\d\d]"
                      label="Tháng/Năm"
                      required
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <Controller
                  control={control}
                  name="ccv"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      value={value}
                      onChange={(e) => {
                        let ccv = formatCVC(e.target.value);
                        onChange(ccv);
                      }}
                      type="text"
                      pattern="\d{3,4}"
                      label="CCV"
                      required
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <input type="submit" />
      </form>
    </PhongDiv>
  );
};

export default PaymentByCredit;
