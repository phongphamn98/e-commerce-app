import { FormHelperText, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { usePayment } from "../../../Context/PaymentContext";
import ButtonArrow from "../../../General/ButtonArrow";
import PhongDiv from "../../../General/PhongDiv";

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
const savedInfo = JSON.parse(sessionStorage.getItem("canPayment"));

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
  //   const [currentInfo, setCurrentInfo] = useState(savedInfo);
  const currentInfo = JSON.parse(sessionStorage.getItem("canPayment"));

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
      sessionStorage.setItem("canPayment", JSON.stringify(info));
      history.push("/payment");
    } catch {
      console.log("looix rooif ban oiw");
    }
  };

  return (
    <PhongDiv className={classes.shipmentDetails}>
      <PhongDiv fontsize="26px" fontweight="bold" texttransform="uppercase">
        Th??ng tin giao h??ng
      </PhongDiv>
      <p>
        Ch??ng t??i s??? s??? d???ng c??c th??ng tin chi ti???t n??y ????? th??ng b??o cho b???n v???
        giao h??ng.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} id="nameform">
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <PhongDiv>
              <Controller
                control={control}
                name="firstName"
                defaultValue={currentInfo.firstName}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    label="T??n"
                    required
                    {...field}
                  />
                )}
              />
              {errors.firstName?.message ? (
                <FormHelperText error className={classes.heplerText}>
                  {errors.firstName.message}
                </FormHelperText>
              ) : (
                <FormHelperText className={classes.heplerText}>
                  Vui l??ng ??i???n ?????y ????? h??? v?? t??n
                </FormHelperText>
              )}
            </PhongDiv>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Controller
              control={control}
              name={"lastName"}
              defaultValue={currentInfo.lastName}
              render={({ field: { onChange, value } }) => (
                <TextField
                  required
                  label="H???"
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
              defaultValue={currentInfo.street}
              render={({ field: { onChange, value } }) => (
                <TextField
                  required
                  label="S??? Nh??/T??n ???????ng"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
            <FormHelperText className={classes.heplerText}>
              V?? d???: 33 L?? Du???n,...
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name={"floor"}
              defaultValue={currentInfo.floor}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="S??? T??a Nh??/S??? T???ng"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
            <FormHelperText className={classes.heplerText}>
              V?? d???: T??a nh?? ?????c; T??a X1 - Chung c?? XYZ,...
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Controller
              control={control}
              name={"province"}
              defaultValue={currentInfo.province}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Th??nh Ph???/T???nh"
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
              defaultValue={currentInfo.distric}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Qu???n"
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
              defaultValue={currentInfo.ward}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Ph?????ng"
                  value={value}
                  onChange={onChange}
                  variant="outlined"
                />
              )}
            />
            <FormHelperText className={classes.heplerText}>
              V?? d???: Ph?????ng Linh Trung, X?? B?? ??i???m,...
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <PhongDiv>
              <strong>Country: </strong>Vi???t Nam
            </PhongDiv>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <PhongDiv width={!matches.medium ? "48.5%" : "100%"}>
              {!currentUser ? (
                <React.Fragment>
                  <Controller
                    control={control}
                    name={"email"}
                    defaultValue={currentInfo.email}
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
                    V?? d???: abc@gmail.com,...
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
                defaultValue={currentInfo.phoneNumber}
                rules={{
                  minLength: {
                    value: 10,
                    message: "S??? ??i???n tho???i ph???i ????? 10 s???",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="S??? ??i???n tho???i"
                    type="number"
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                  />
                )}
              />

              <FormHelperText className={classes.heplerText}>
                V?? d???: 0123456789
              </FormHelperText>
            </PhongDiv>
          </Grid>
        </Grid>
        <ButtonArrow
          width={!matches.medium ? "48%" : "unset"}
          type="submit"
          margin="30px 0 20px 0"
          text="Xem l???i v?? thanh to??n"
        />
      </form>
    </PhongDiv>
  );
};

export default ShipmentDetails;
