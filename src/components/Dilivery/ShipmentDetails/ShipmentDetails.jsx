import { FormHelperText, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhongDiv from "../../../General/PhongDiv";
import { makeStyles } from "@material-ui/styles";
import Select from "react-select";
import ButtonArrow from "../../../General/ButtonArrow";
import { useAuth } from "../../../Context/AuthContext";
import PhongModal from "../../../General/PhongModal";
import LoginForm from "../../../Login/LoginForm";
import { usePayment } from "../../../Context/PaymentContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  shipmentDetails: {
    "& .MuiInputLabel-asterisk": {
      color: "red",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
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
  },
  heplerText: {
    fontSize: "14px",
    paddingLeft: "20px",
  },
}));

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ShipmentDetails = ({ currentUser, matches }) => {
  const classes = useStyles();
  const {
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { savePaymentInfo } = usePayment();
  const history = useHistory();

  const onSubmit = async () => {
    const values = getValues();
    let info = { ...values };
    try {
      if (currentUser) {
        info.email = currentUser.email;
        await savePaymentInfo(info);
      } else {
        await savePaymentInfo(info);
      }
      localStorage.setItem("canPayment", true);
      history.push("/payment");
    } catch {
      console.log("looix rooif ban oiw");
    }
  };

  console.log("errors", errors);

  return (
    <PhongDiv className={classes.shipmentDetails}>
      <PhongDiv fontsize="26px" fontweight="bold" texttransform="uppercase">
        Thông tin giao hàng
      </PhongDiv>
      <p>
        Chúng tôi sẽ sử dụng các thông tin chi tiết này để thông báo cho bạn về
        giao hàng.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} id="nameform">
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <PhongDiv>
              <Controller
                control={control}
                name={"firstName"}
                defaultValue=""
                rules={{
                  minLength: {
                    value: 5,
                    message: "duma lo mà điền vào đây, không bố đấm mày",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="Tên"
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                  />
                )}
              />
              {errors.firstName?.message ? (
                <FormHelperText error className={classes.heplerText}>
                  {errors.firstName.message}
                </FormHelperText>
              ) : (
                <FormHelperText className={classes.heplerText}>
                  Vui lòng điền đầy đủ họ và tên
                </FormHelperText>
              )}

              {/* <input type="submit" /> */}
            </PhongDiv>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Controller
              control={control}
              name={"lastName"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  required
                  label="Họ"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name={"street"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  required
                  label="Số Nhà/Tên Đường"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
            <FormHelperText className={classes.heplerText}>
              Ví dụ: 33 Lê Duẩn,...
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name={"floor"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Số Tòa Nhà/Số Tầng"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
            <FormHelperText className={classes.heplerText}>
              Ví dụ: Tòa nhà Đức; Tòa X1 - Chung cư XYZ,...
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Controller
              control={control}
              name={"province"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Thành Phố/Tỉnh"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Controller
              control={control}
              name={"distric"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Quận"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name={"ward"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Phường"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
            <FormHelperText className={classes.heplerText}>
              Ví dụ: Phường Linh Trung, Xã Bà Điểm,...
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <PhongDiv>
              <strong>Country: </strong>Việt Nam
            </PhongDiv>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PhongDiv width={!matches.medium ? "48.5%" : "100%"}>
              {!currentUser ? (
                <React.Fragment>
                  {" "}
                  <Controller
                    control={control}
                    name={"email"}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        required
                        label="Email"
                        type="email"
                        value={value}
                        onChange={onChange}
                        variant="outlined"
                      />
                    )}
                  />
                  <FormHelperText className={classes.heplerText}>
                    Ví dụ: abc@gmail.com,...
                  </FormHelperText>
                </React.Fragment>
              ) : (
                <PhongDiv>
                  <strong>Email: </strong>
                  {currentUser.email}
                </PhongDiv>
              )}
            </PhongDiv>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PhongDiv width={!matches.medium ? "48.5%" : "100%"}>
              <Controller
                control={control}
                name={"phoneNumber"}
                defaultValue=""
                rules={{
                  minLength: {
                    value: 10,
                    message: "Số điện thoại phải đủ 10 số",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="Số điện thoại"
                    type="number"
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                  />
                )}
              />
              {/* {errors.phoneNumber?.message && (
                <p>{errors.phoneNumber?.message}</p>
              )} */}
              <FormHelperText className={classes.heplerText}>
                Ví dụ: 0123456789
              </FormHelperText>
            </PhongDiv>
          </Grid>
        </Grid>

        <ButtonArrow
          width={!matches.medium ? "48%" : "unset"}
          type="submit"
          margin="30px 0 20px 0"
          text="Xem lại và thanh toán"
        />
      </form>
    </PhongDiv>
  );
};

export default ShipmentDetails;
