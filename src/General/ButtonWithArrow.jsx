import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./buttonStyles";

const ButtonWithArrow = ({ children, ...props }) => {
  const classes = useStyles(props);
  const { text, isBlackBackground, onClick, goTo } = props;
  let history = useHistory();

  const redirect = () => {
    history.push(goTo);
  };
  return (
    <div
      className={
        isBlackBackground ? classes.btnOrderWithOutline : classes.btnOrder
      }
      onClick={goTo ? redirect : onClick}
    >
      <span className={classes.btnText}>{text}</span>
      <IconButton className={classes.btnArrow}>
        <FontAwesomeIcon
          color={isBlackBackground ? "white" : "black"}
          fontSize="30px"
          icon={faLongArrowAltRight}
        />
      </IconButton>
      {children}
    </div>
  );
};

export default ButtonWithArrow;
