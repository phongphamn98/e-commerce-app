import { FormHelperText, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Media from "react-media";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import ButtonArrow from "../../General/ButtonArrow";
import PhongDiv from "../../General/PhongDiv";
import { userLogin } from "../../redux/actions/loginActions";

const useStyles = makeStyles((theme) => ({
  regiseterForm: {
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

const RegisterForm = () => {
  const classes = useStyles();
  const { handleSubmit, control, getValues } = useForm();
  const { signup, currentUser } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  const onSubmit = async ({ email, password, passwordConfirm }) => {
    if (password !== passwordConfirm) {
      return;
    }
    try {
      setError("");
      await signup(email, password);
      history.push("/");
    } catch {
      setError("Failed to register");
    }
  };

  return (
    <Media
      queries={{
        small: "(max-width: 640px)",
        medium: "(min-width: 641px) and (max-width: 1276px)",
        large: "(min-width: 1277px) ",
      }}
    >
      {(matches) => (
        <PhongDiv flexbasis="30%" className={classes.regiseterForm}>
          <PhongDiv
            fontsize={matches.large ? "42px" : "36px"}
            texttransform="uppercase"
            fontweight="bold"
            margin="0 0 30px 0"
          >
            đăng kí
          </PhongDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PhongDiv display="flex" flexdirection="column" flexgap="2rem">
              <PhongDiv width="100%">
                <Controller
                  control={control}
                  name="firstName"
                  defaultValue={""}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <TextField
                        required
                        label="Tên"
                        value={value}
                        onChange={onChange}
                        variant="outlined"
                        autoFocus
                        aria-describedby="component-helper-text"
                      />
                    );
                  }}
                />
                {getValues("firstName") && (
                  <FormHelperText error={true} id="component-helper-text">
                    Vui lòng nhập tên của bạn
                  </FormHelperText>
                )}
              </PhongDiv>
              <Controller
                control={control}
                name="lastName"
                defaultValue={""}
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
              <Controller
                control={control}
                name={"email"}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    type="email"
                    label="Email"
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                  />
                )}
              />
              <Controller
                control={control}
                name={"password"}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    type="password"
                    label="Mật khẩu"
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                  />
                )}
              />
              <Controller
                control={control}
                name={"passwordConfirm"}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    type="password"
                    label="Xác nhận mật khẩu"
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                  />
                )}
              />
              <input type="submit" style={{ display: "none" }} />
              <ButtonArrow
                onClick={() => {
                  const values = getValues();
                  //kiểm tra xem thằng này có trong users hay chưa?
                  onSubmit(values);
                  // addUser(values);
                }}
                text="Đăng kí"
                width="40%"
                isBlackBackground={true}
              ></ButtonArrow>
            </PhongDiv>
          </form>
        </PhongDiv>
      )}
    </Media>
  );
};

export default RegisterForm;
