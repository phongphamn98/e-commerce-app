import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Media from "react-media";
import PhongDiv from "./PhongDiv";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.smallScreen": {
      alignItems: "flex-end",
    },
  },
}));

const PhongModal = ({ handleClose, open, children }) => {
  const classes = useStyles();
  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px) and (max-width: 1280px)",
        xLarge: "(min-width: 1280px",
      }}
    >
      {(matches) => (
        <Modal
          className={classes.modal + (matches.medium ? " smallScreen" : "")}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <PhongDiv
              width={matches.medium ? "100%" : "50%"}
              padding="20px"
              backgroundcolor="white"
            >
              {children}
            </PhongDiv>
          </Fade>
        </Modal>
      )}
    </Media>
  );
};

export default PhongModal;
