import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Media from "react-media";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import ButtonArrow from "../General/ButtonArrow";
import PhongDiv from "../General/PhongDiv";
import ForgotPasswordModal from "./Register/ForgotPasswordModal/ForgotPasswordModal";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassword: {
    display: "inline-block",
    padding: "2px",
    transition: "all .1s",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
}));

const LoginForm = ({ redirect = true, closeModal }) => {
  const classes = useStyles();
  const { handleSubmit, control, getValues } = useForm();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = async ({ email, password }) => {
    try {
      setError("");
      await login(email, password);
      if (redirect) {
        history.push("/");
      } else {
        closeModal();
      }
    } catch {
      setError("Failed to sign in");
    }
  };

  const getEmail = () => {
    return getValues("email");
  };

  return (
    <Media
      queries={{
        small: "(max-width: 640px)",
        medium: "(min-width: 641px) and (max-width: 959px)",
        large: "(min-width: 960px) ",
      }}
    >
      {(matches) => (
        <PhongDiv className={classes.regiseterForm} backgroundcolor="white">
          <PhongDiv
            fontsize={matches.large ? "42px" : "36px"}
            texttransform="uppercase"
            fontweight="bold"
            margin="0 0 30px 0"
          >
            đăng nhập
          </PhongDiv>
          <ForgotPasswordModal email={getEmail} />
          {error != "" && <p>{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <PhongDiv display="flex" flexdirection="column" flexgap="2rem">
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
              <input type="submit" style={{ display: "none" }} />
              <ButtonArrow
                width={!redirect ? "unset" : matches.large ? "40%" : "unset"}
                onClick={() => {
                  const values = getValues();
                  onSubmit(values);
                }}
                text="Đăng nhập"
                isBlackBackground={true}
              />
            </PhongDiv>
          </form>
        </PhongDiv>
      )}
    </Media>
  );
};

export default LoginForm;
