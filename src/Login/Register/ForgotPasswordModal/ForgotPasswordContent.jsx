import React, { useState } from "react";
import Media from "react-media";
import PhongDiv from "./../../../General/PhongDiv";
import { makeStyles, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import ButtonArrow from "../../../General/ButtonArrow";
import { useAuth } from "../../../Context/AuthContext";
// import { Alert } from "@material-ui/lab";
// import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  content: {
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    backgroundColor: "white",
    maxHeight: "100%",
    padding: "15px",

    "& h1": {
      margin: 0,
      textTransform: "uppercase",
    },
    "& p": {
      marginTop: 0,
    },
  },
  textField: {
    width: "100%",
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
  },
}));

const ForgotPasswordContent = ({ email }) => {
  const classes = useStyles();
  const { control, getValues } = useForm();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");

  const handlResetPassword = async () => {
    const email = getValues("email");
    try {
      setError("");
      await resetPassword(email);
    } catch {
      setError("Failed to reset password");
    }
  };

  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px)",
      }}
    >
      {(matches) => (
        <PhongDiv
          width={matches.medium ? "100%" : "55%"}
          className={classes.content}
        >
          <p>{error}</p>
          <h1>bạn quên mật khẩu?</h1>
          <p>
            Nhập địa chỉ email của bạn phía dưới, và nếu tài khoản tồn tại,
            chúng tôi sẽ gửi cho bạn một đường dẫn để đặt lại mật khẩu.
          </p>

          {/* {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )} */}

          <Controller
            control={control}
            name={"email"}
            defaultValue={email}
            render={({ field: { onChange, value } }) => (
              <TextField
                className={classes.textField}
                required
                type="email"
                label="Email"
                value={value}
                onChange={onChange}
                variant="outlined"
              />
            )}
          />

          <ButtonArrow
            width="240px"
            margin="30px 0 0 0"
            text="Đặt lại mật khẩu"
            isBlackBackground={true}
            onClick={handlResetPassword}
          />
        </PhongDiv>
      )}
    </Media>
  );
};

export default ForgotPasswordContent;
