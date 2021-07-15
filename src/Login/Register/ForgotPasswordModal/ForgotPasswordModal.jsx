import React, { useState } from "react";
import Media from "react-media";
import ButtonWithArrow from "../../../General/ButtonWithArrow";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PhongDiv from "./../../../General/PhongDiv";
import ForgotPasswordContent from "./ForgotPasswordContent";

const useStyles = makeStyles((theme) => ({
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
const ForgotPasswordModal = ({ email }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Media
      queries={{
        medium: "(max-width: 967px)",
        large: "(min-width: 968px) and (max-width: 1439px)",
        xLarge: "(min-width: 1440px)",
      }}
    >
      {(matches) => (
        <React.Fragment>
          <PhongDiv
            cursor="pointer"
            textdecoration="underline"
            margin="0 0 15px 0"
            className={classes.forgotPassword}
            onClick={handleOpen}
          >
            Bạn quên mật khẩu?
          </PhongDiv>
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <ForgotPasswordContent email={email} />
            </Fade>
          </Modal>
        </React.Fragment>
      )}
    </Media>
  );
};

export default ForgotPasswordModal;
